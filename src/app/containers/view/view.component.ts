import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id: string = '';
  constructor(
    private route: ActivatedRoute,
    private transactionSvc: TransactionService
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.transactionSvc.getTransactions(this.id, 0).subscribe(console.log)
  }

}
