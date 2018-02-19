import * as moment from 'moment/moment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EventDaySelectorComponent } from '../event-day-selector/event-day-selector.component';
import { Moment } from 'moment/moment';


@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {

  @ViewChild(EventDaySelectorComponent)
  datePicker: EventDaySelectorComponent;

  constructor() {}

  ngOnInit() {
  }

  dasSelectedChange(days: Array<Moment>) {
    /*console.log(obj);
    console.log('error', this.datePicker.errorDays);*/
  }
}
