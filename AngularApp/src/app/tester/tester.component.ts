import { Component, OnInit } from '@angular/core';

import { Event } from '../model/event';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {

  events: any = [];
  displayedEvent: Event;
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
      this.displayArray(events);
    });
  }

  private getID() {
    this.api.getEvent(this.ID).subscribe(event => {
      console.log('getid', event);
      this.display(event);
    });
  }

  private put() {
    this.api.createEvent(this.displayedEvent).subscribe(sevent => {
      console.log('create', sevent);
    });
  }

  private putID() {
    this.api.updateEvent(this.ID, this.displayedEvent).subscribe(sevent => {
      console.log('update', sevent);
    });
  }

  private deleteID() {
    this.api.deleteEvent(this.ID).subscribe(sevent => {
      console.log('delete', sevent);
    });
  }

  private display(e: Event) {
    this.events = e;
    this.displayedEvent = e;
  }

  private displayArray(e: Event[]) {
    this.events = e;
    this.displayedEvent = e[0];
  }

}
