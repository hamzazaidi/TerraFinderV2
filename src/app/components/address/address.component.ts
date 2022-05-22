import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() data: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
