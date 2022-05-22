import { Component, Input, OnInit } from '@angular/core';
import { TransactionData } from '../../models/Transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  displayedColumns: string[] = ['txHash', 'type', 'block', 'timeStamp', 'fee'];
  @Input() transactionData: TransactionData[] = [];  
  constructor() { }

  ngOnInit(): void {
  }

}
