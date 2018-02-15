import { Component, OnInit, ViewChild, ContentChild, AfterContentInit } from '@angular/core';

import * as moment from 'moment';
import { MultipleDatePickerComponent, DateRangeHelper } from 'multiple-date-picker-angular/dist';
import { PickerHacker } from '../hack-multiple-date-picker';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  outp: Array<moment.Moment> = new Array();

  allowed: Array<moment.Moment> = new Array(moment());
  disabledDays: Array<any> = [];

  @ViewChild(MultipleDatePickerComponent)
  datePicker: MultipleDatePickerComponent;

  constructor() {}

  ngOnInit() {
    PickerHacker.hackDatePicker(this.datePicker, this.allowed);
  }

  press() {
    this.allowed.push(moment('2018-02-16'));
    this.allowed.push(moment('2018-02-17'));
    this.allowed.push(moment('2018-02-18'));
    this.allowed.push(moment('2018-02-19'));
    (this.datePicker as any).refreshAllowed(this.allowed);
  }

}
