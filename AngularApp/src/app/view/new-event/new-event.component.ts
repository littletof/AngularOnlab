import { Component, OnInit, ViewChild, ContentChild, AfterContentInit, DoCheck, IterableDiffers } from '@angular/core';

import * as moment from 'moment';
import { MultipleDatePickerComponent, DateRangeHelper } from 'multiple-date-picker-angular/dist';
import { Moment } from 'moment';
import { Common } from '../../common/common';
import { DatePickerHacker } from '../multiple-date-picker/hack-multiple-date-picker';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit, DoCheck {

  selectedDays: Array<Moment> = new Array();
  showDays: Array<Moment> = new Array();
  errorDays: Array<Moment> = new Array();

  allowed: Array<Moment> = new Array(moment());
  disabledDays: Array<any> = [];

  @ViewChild(MultipleDatePickerComponent)
  datePicker: MultipleDatePickerComponent;

  differ: any;
  constructor(differs: IterableDiffers) {
     this.differ = differs.find([]).create(null);
  }

  ngDoCheck() {
    const change = this.differ.diff(this.selectedDays);
    if (change) {
      this.displayArrays();
      this.sort();
    }
  }

  ngOnInit() {
    // PickerHacker.hackDatePicker(this.datePicker, this.allowed);
  }

  displayArrays() {
    const errored = this.selectedDays.filter(day => this.disabledDays.indexOf(day.isoWeekday() % 7) !== -1 );
    this.errorDays.concat(errored);

    this.showDays = this.selectedDays.filter(day => this.errorDays.indexOf(day) === -1 );
  }

  sort() {
    this.selectedDays.sort((a, b) => (a.unix() - b.unix()));
  }

  selectChange(daysOff: number[]) {
    this.showDays = this.selectedDays.filter(day => daysOff.indexOf(day.isoWeekday() % 7) === -1 );
    this.errorDays = this.selectedDays.filter(day => daysOff.indexOf(day.isoWeekday() % 7) !== -1 );
  }

  isErrorDay(day: Moment): boolean {
    return this.errorDays.indexOf(day) !== -1;
  }

  delDay(day: Moment) {
    Common.removeFromArray(this.selectedDays, day);
    Common.removeFromArray(this.errorDays, day);
    this.datePicker.runGenerate();
  }

  dateClicked(day: Moment) {
    DatePickerHacker.jumpToDate(this.datePicker, day);
  }
  /*
  press() {
    this.allowed.push(moment('2018-02-16'));
    this.allowed.push(moment('2018-02-17'));
    this.allowed.push(moment('2018-02-18'));
    this.allowed.push(moment('2018-02-19'));
    (this.datePicker as any).refreshAllowed(this.allowed);
  }*/

}
