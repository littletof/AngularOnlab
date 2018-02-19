import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { MultipleDatePickerComponent } from 'multiple-date-picker-angular/dist';

import * as moment from 'moment';
import { Common } from '../../common/common';

@Component({
  selector: 'app-day-checkbox',
  templateUrl: './day-checkbox.component.html',
  styleUrls: ['./day-checkbox.component.css']
})
export class DayCheckboxComponent implements OnInit, OnChanges {

  @Input() calendarObject: MultipleDatePickerComponent;

  @Input() fixedDays: number[] = [];

  @Input() selected: number[] = [];
  @Output() selectedChange: EventEmitter<number[]> = new EventEmitter();
  @Output() change: EventEmitter<any> = new EventEmitter();

  dm = moment.weekdaysMin();

  days: any[] = [
    {value: false, name: this.dm[1], number: 1},
    {value: false, name: this.dm[2], number: 2},
    {value: false, name: this.dm[3], number: 3},
    {value: false, name: this.dm[4], number: 4},
    {value: false, name: this.dm[5], number: 5},
    {value: false, name: this.dm[6], number: 6},
    {value: false, name: this.dm[0], number: 0}
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const selected: SimpleChange = changes.selected;
    if (selected && selected.currentValue) {
      const values = selected.currentValue;
      if (!Array.isArray(values)) {
        throw Error('Passed selected is not an array');
      }

      for (const daynum of values) {
        if (daynum < 7 && daynum >= 0) {
          this.setDay(daynum, true);
        } else {
          Common.removeFromArray(this.selected, daynum);
          this.emit({removed: true, weekday: daynum});
        }

      }


    } else {
      this.selected = [];
    }
  }

  setDay(daynum: number, value: boolean) {
    if (daynum < 7 && daynum >= 0) {
      this.days[(daynum + 6) % 7].value = value;
    }
  }

  emit(obj: any) {
    const copy: number[] = this.selected.slice();
    this.selectedChange.emit(copy);
    this.change.emit(obj);

    this.updateCalendarWeekDays(copy);
  }

  updateCalendarWeekDays(obj: number[]) {
    const copy: number[] = obj.slice();

    if (this.calendarObject) {
      this.calendarObject.weekDaysOff = copy;
      this.calendarObject.runGenerate();
    }
  }

  changed(i: number) {
    const daynum = this.days[i].number;
    if (this.days[i].value) {
      if (this.selected.indexOf(daynum) === -1 ) {
        this.selected.push(daynum);
        this.emit({removed: true, weekday: daynum});
      }
    } else {
      Common.removeFromArray(this.selected, daynum);
      this.emit({removed: false, weekday: daynum});
    }
  }

  isFixedDay(i: number) {
    // console.log(this.fixedDays, this.selected, i, this.fixedDays.indexOf(i) !== -1);
    return this.fixedDays.indexOf(i) !== -1;
  }

}

