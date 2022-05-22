import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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

  form = new FormGroup({
    api: new FormControl('Mainnet'),
    currency: new FormControl('USD'),
    search: new FormControl('', Validators.required)
  });  

  constructor(private router: Router) {}
  ngOnInit(): void {}
  onSearch() {
   const {search} = this.form.getRawValue()
   this.router.navigate(['view', search])
  }
}
