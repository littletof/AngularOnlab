import * as moment from 'moment/moment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EventDaySelectorComponent } from '../event-day-selector/event-day-selector.component';
import { Moment } from 'moment/moment';
import { NewEventData } from './model/new-event-data';
import { Event } from '../../model/event';

import { Validators, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../../data/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  formData: NewEventData = new NewEventData();

  @ViewChild(EventDaySelectorComponent)
  datePicker: EventDaySelectorComponent;

  constructor(private router: Router, private api: DataService) {}

  ngOnInit() {
  }

  daysSelectedChange(days: Array<Moment>) {
    this.formData.SelectedDays = days;
  }

  titleBlur() {
    this.formData.Title = this.formData.Title.trim();
  }

  isFormValid(): boolean {
    return this.formData.isValid();
  }

  submit() {
    this.formData.DisabledDays = this.datePicker.disabledDays;
    const event = this.formData.getEvent();
    // console.log(JSON.stringify(event));
    this.api.createEvent(event).subscribe(result => this.gotoEventPage(result));
  }

  gotoEventPage(event: Event) {
    this.router.navigateByUrl('/event/' + event.path);
  }
}
