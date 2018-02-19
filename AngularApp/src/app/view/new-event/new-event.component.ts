import * as moment from 'moment/moment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EventDaySelectorComponent } from '../event-day-selector/event-day-selector.component';
import { Moment } from 'moment/moment';
import { NewEventData } from './model/new-event-data';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  formData: NewEventData = new NewEventData();

  @ViewChild(EventDaySelectorComponent)
  datePicker: EventDaySelectorComponent;

  constructor() {}

  ngOnInit() {
  }

  daysSelectedChange(days: Array<Moment>) {
    this.formData.SelectedDays = days;
  }

  submit() {
    console.log(this.formData, this.formData.isValid());
  }
}
