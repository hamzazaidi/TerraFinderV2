import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {  
  searchLabel: string = 'Search Block/ Tx / Account';
  apis: string[] = ['Mainnet', 'LocalTerra'];
  currencies: string[] = [
    'AUD',
    'CAD',
    'CHF',
    'CNY',
    'DKK',
    'EUR',
    'GBP',
    'HKD',
    'IDR',
    'INR',
    'JPY',
    'KRW',
    'MNT',
    'MYR',
    'NOK',
    'PHP',
    'SDR',
    'SEK',
    'SGD',
    'THB',
    'TWD',
    'USD',
  ];  
  constructor() { }
  form = new FormGroup({
    api: new FormControl('Mainnet'),
    currency: new FormControl('USD'),
    search: new FormControl('', Validators.required)
  });  
  ngOnInit(): void {}
  onSearch() {
    const {search} = this.form.getRawValue()    
   }

}
