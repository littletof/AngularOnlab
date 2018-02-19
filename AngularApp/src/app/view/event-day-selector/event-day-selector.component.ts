import { Component, OnInit, ViewChild, IterableDiffers, OnChanges, DoCheck, Output, EventEmitter, Input } from '@angular/core';
import { Moment } from 'moment';
import { MultipleDatePickerComponent } from 'multiple-date-picker-angular/dist';
import { DatePickerHacker } from '../multiple-date-picker/hack-multiple-date-picker';
import { Common } from '../../common/common';

@Component({
  selector: 'app-event-day-selector',
  templateUrl: './event-day-selector.component.html',
  styleUrls: ['./event-day-selector.component.css']
})
export class EventDaySelectorComponent implements OnInit, DoCheck {

  @Output() daysSelected: EventEmitter<Array<Moment>> = new EventEmitter();
  lastEmitted: Array<Moment> = new Array();



  selectedDays: Array<Moment> = new Array();

  showDays: Array<Moment> = new Array();
  errorDays: Array<Moment> = new Array();

  allowed: Array<Moment> = new Array();
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

    // TODO emits too much,on hower too
    const showChange = this.differ.diff(this.showDays);
    if ((showChange || change) && !this.isLastEmittedSame()) {
      this.lastEmitted = this.showDays;
      this.daysSelected.emit(this.showDays);
    }
  }

  isLastEmittedSame(): boolean {
    if (this.lastEmitted.length !== this.showDays.length) {
      return false;
    }
    this.lastEmitted.forEach(element => {
      if (!this.showDays.includes(element)) {
        return false;
      }
    });
    return true;
  }

  ngOnInit() {
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

    this.daysSelected.emit(this.showDays);
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

  addDays(days: Moment[]) {
    const filtered = days.slice().filter(day => this.disabledDays.indexOf(day.isoWeekday() % 7) === -1);
    this.selectedDays = this.dateArrayMerge(this.selectedDays, filtered);
  }

  dateArrayMerge(a: Moment[], b: Moment[]): Moment[] {
    const outp = a.slice();
    const merge = b.slice();

    merge.forEach(bitem => {
      let found = false;
      outp.forEach(aitem => {
        if (aitem.isSame(bitem)) {
          found = true;
          return;
        }
      });
      if (!found) {
        outp.push(bitem);
        outp.sort();
      }
    });

    return outp;
  }

}
