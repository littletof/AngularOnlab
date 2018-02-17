import * as moment from 'moment/moment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Moment } from 'moment/moment';

@Component({
  selector: 'app-date-range-adder',
  templateUrl: './date-range-adder.component.html',
  styleUrls: ['./date-range-adder.component.css']
})
export class DateRangeAdderComponent implements OnInit {

  @Output() addDays = new EventEmitter<Moment[]>();

  thisnext = [{value: 0, text: 'This'},
              {value: 1, text: 'Upcoming'},
              {value: 2, text: 'Next', extra: true, extraValue: 1}];
  interval = [{value: 1, text: 'Day', moment: 'day'},
              {value: 7, text: 'Week', moment: 'week'},
              {value: 30, text: 'Month', moment: 'month'}];

  selectedInterval = 0;
  selectedThisNext = 0;

  constructor() {}

  ngOnInit() {
    // console.log(this.now, this.day, this.week, this.month);
  }

  add() {

    let days;
    // todo fnbe
      switch (this.selectedThisNext) {
        case 0: // this
          days = this.thisDays();
          break;
        case 1: // upcoming
          days = this.upcomingDays();
          break;
        case 2: // next
          days = this.nextDays();
          break;
      }

    this.addDays.emit(days);

  }

  thisDays(): Moment[] {
    const interval = this.interval[this.selectedInterval].moment;

    const start = moment().startOf('day');
    const end = moment().endOf(interval as any).startOf('day');

    const daysuntil = end.diff(start, 'day') + 1;
    return this.dayForIntFromNow(daysuntil);
  }

  upcomingDays(): Moment[] {
    const interval = this.interval[this.selectedInterval].moment;

    const start = moment().endOf(interval as any).startOf('day').add(1, 'day');
    console.log(start);
    const end = start.clone().add(1, interval as any);

    console.log(start, end);

    const daysuntil = end.diff(start, 'day');
    return this.dayForIntFrom(start, daysuntil);
  }

  nextDays(): Moment[] {
    return this.dayForIntFromNow(this.thisnext[2].extraValue * this.interval[this.selectedInterval].value);
  }

  dayForIntFromNow(num: number): Array<moment.Moment> {
    return this.dayForIntFrom(moment(), num);
  }

  dayForIntFrom(day: Moment, num: number): Array<moment.Moment> {
    let start = day.startOf('day');
    const days = new Array();
    for (let index = 0; index < num; index++) {
      days.push(start.clone());
      start = start.add(1, 'day');
    }

    return days;
  }

}
