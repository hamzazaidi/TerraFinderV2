import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tx-hash-link',
  templateUrl: './tx-hash-link.component.html',
  styleUrls: ['./tx-hash-link.component.scss']
})
export class TxHashLinkComponent implements OnInit {
  @Input() hashLink: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  formatHash(hashLink: string) {
    const preFix = hashLink.substring(0, 8);
    const postFix = hashLink.substring(hashLink.length - 8, hashLink.length);

    return `${preFix}...${postFix}`
  }

}
