import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-time-stamp-block',
  templateUrl: './time-stamp-block.component.html',
  styleUrls: ['./time-stamp-block.component.scss']
})
export class TimeStampBlockComponent implements OnInit {
  @Input() timestamp: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  formatTime(timestamp: string): string {
    return moment(timestamp).format('yyyy.mm.DD hh:mm:ssZ')
  }

}
