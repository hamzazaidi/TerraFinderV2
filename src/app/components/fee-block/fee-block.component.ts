import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-block',
  templateUrl: './fee-block.component.html',
  styleUrls: ['./fee-block.component.scss']
})
export class FeeBlockComponent implements OnInit {
  @Input() amount: string = '';
  @Input() denom: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  formatFee(amount: string, denom: string): string {
    const parsedAmount = (parseInt(amount)/1000000).toFixed(6);
    return `${parsedAmount} ${denom}`;
  }

}
