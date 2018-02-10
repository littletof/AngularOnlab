import { Component, OnInit } from '@angular/core';

import { Event } from '../model/event';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {

  events: Event[] = [];
  ID = 1;
  JSON: any;

  constructor(private api: DataService) {
    this.JSON = JSON;
   }

  ngOnInit() {

  }

  private click() {
    console.log('clicked');
  }

  private get() {
    this.api.getAllEvents().subscribe(events => {
      console.log('get', events);
      this.events = events;
    });
  }

  private getID() {
    this.api.getEvent(this.ID).subscribe(event => {
      console.log('get', event);
      this.events = event;
    });
  }

  private put() {

  }

  private putID() {

  }

  private deleteID() {

  }

}
