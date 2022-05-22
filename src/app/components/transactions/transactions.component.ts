import { Component, OnInit } from '@angular/core';
import { TransactionData } from '../../models/Transaction';


const ELEMENT_DATA: TransactionData[] = [
  { txHash: 'Hydrogen', type: 1.0079, block: 'H', timeStamp: '', fee: ''},
  { txHash: 'Helium', type: 4.0026, block: 'He', timeStamp: '', fee: ''},
  { txHash: 'Lithium', type: 6.941, block: 'Li', timeStamp: '', fee: ''},
  { txHash: 'Beryllium', type: 9.0122, block: 'Be', timeStamp: '', fee: ''},
  { txHash: 'Boron', type: 10.811, block: 'B', timeStamp: '', fee: ''},
  { txHash: 'Carbon', type: 12.0107, block: 'C', timeStamp: '', fee: ''},
  { txHash: 'Nitrogen', type: 14.0067, block: 'N', timeStamp: '', fee: ''},
  { txHash: 'Oxygen', type: 15.9994, block: 'O', timeStamp: '', fee: ''},
  { txHash: 'Fluorine', type: 18.9984, block: 'F', timeStamp: '', fee: ''},
  { txHash: 'Neon', type: 20.1797, block: 'Ne', timeStamp: '', fee: ''},
];

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  displayedColumns: string[] = ['txHash', 'type', 'block', 'timeStamp', 'fee'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
