import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-range-adder',
  templateUrl: './date-range-adder.component.html',
  styleUrls: ['./date-range-adder.component.css']
})
export class DateRangeAdderComponent implements OnInit {

  model;
  selected = 0;

  thisnext = [{value: 0, text: 'This'}, {value: 1, text: 'Next', extra: true, extraValue: 1}];

  constructor() {}

  ngOnInit() {
  }

}
