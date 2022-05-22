import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-not-found',
  templateUrl: './account-not-found.component.html',
  styleUrls: ['./account-not-found.component.scss']
})
export class AccountNotFoundComponent implements OnInit {
  @Input() id: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
