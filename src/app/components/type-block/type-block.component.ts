import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-block',
  templateUrl: './type-block.component.html',
  styleUrls: ['./type-block.component.scss']
})
export class TypeBlockComponent implements OnInit {
  @Input() type: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  formatType(type: string) {
    const index = type.indexOf('/')
    return type.substring(index + 1, type.length);
  }

}
