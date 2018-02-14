import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { DateClickedDirective, DateRangeHelper } from 'multiple-date-picker-angular/dist';

import * as moment from 'moment';

@Component({
  selector: 'app-debug-calendar',
  templateUrl: './debug-calendar.component.html',
  styleUrls: ['./debug-calendar.component.css']
})
export class DebugCalendarComponent implements OnInit {

  model: NgbDateStruct;

  constructor() {
    moment.locale('hu');
  }

  ngOnInit() {
  }

  test(obj: any, other: any) {
    console.log(obj, other);
  }

}
