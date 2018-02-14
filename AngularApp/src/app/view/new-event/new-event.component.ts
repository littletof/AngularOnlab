import { Component, OnInit, ViewChild, ContentChild, AfterContentInit } from '@angular/core';

import * as moment from 'moment';
import { MultipleDatePickerComponent } from 'multiple-date-picker-angular/dist';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  days: number[] = [2];

  @ViewChild(MultipleDatePickerComponent)
  datePicker: MultipleDatePickerComponent;

  constructor() { moment.locale('hu'); }

  ngOnInit() {
  }

  ref() {
    this.datePicker.runGenerate();
  }



}
