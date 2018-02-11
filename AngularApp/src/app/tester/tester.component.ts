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
      console.log('getid', event);
      this.events = event;
    });
  }

  private put() {
    this.api.createEvent(this.events[0]).subscribe(sevent => {
      console.log('create', sevent);
    });
  }

  private putID() {
    this.api.updateEvent(this.ID, this.events[0]).subscribe(sevent => {
      console.log('update', sevent);
    });
  }

  private deleteID() {
    this.api.deleteEvent(this.ID).subscribe(sevent => {
      console.log('delete', sevent);
    });
  }

}
