import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, Subscription, switchMap, tap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { TransactionData, TransactionResponse } from '../../models/Transaction';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {
  isValid: boolean = true;
  id: string = '';
  isFetching: boolean = true;
  subscriptions: Subscription[] = [];
  transactionData: TransactionData[] = [];
  offset: number= 0;
  constructor(
    private route: ActivatedRoute,
    private transactionSvc: TransactionService,
    private authSvc: AuthService
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

  private fetchTransactions(offset: number): Observable<TransactionResponse> {
    this.isFetching = true;
    return this.transactionSvc.getTransactions(this.id, offset);
  }

  private populateTransactionData(response: TransactionResponse) {
    const mappedResponse: TransactionData[] = response.txs.map(tx => {
      return {
        txHash: tx.txhash,
        chainId: tx.chainId,
        height: tx.height,
        block: `${tx.height} (${tx.chainId})`,
        type: tx.tx.value.msg[0]?.type || '',
        fee: tx.tx.value.fee.amount[0]?.amount || '',
        amount: tx.tx.value.fee.amount[0]?.amount,
        denom: tx.tx.value.fee.amount[0]?.denom,
        timeStamp: tx.timestamp
      } 
    });
    this.offset = response.next;
    this.transactionData = [...this.transactionData, ...mappedResponse]
  }

  onLoadMore() {
    this.subscriptions.push(
      this.fetchTransactions(this.offset).subscribe((response: TransactionResponse) => {
        this.isFetching = false;
        this.populateTransactionData(response);
      })
    )
  }

  ngOnInit(): void {
    this.subscriptions.push(this.authSvc.isValid(this.id).pipe(
      tap(isValid => {
        if(!isValid) { this.isFetching = false; }
        this.isValid = isValid
      }),
      filter(isValid => isValid),      
      switchMap(() => this.fetchTransactions(this.offset).pipe(
        map(response => {
          this.isFetching = false;
          this.populateTransactionData(response);
        })
      ))      
    ).subscribe())
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe())
  }
}

