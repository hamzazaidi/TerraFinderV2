import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-link',
  templateUrl: './block-link.component.html',
  styleUrls: ['./block-link.component.scss']
})
export class BlockLinkComponent implements OnInit {
  @Input() height: string ='';
  @Input() chainId: string= '';
  constructor() { }

  ngOnInit(): void {
  }

}
