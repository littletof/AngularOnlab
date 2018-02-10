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
  JSON: any;

  constructor(private api: DataService) {
    this.JSON = JSON;
   }

  ngOnInit() {
    this.api.getAllEvents().subscribe(events => {
      this.events = events;
    });

    console.log(this.events);
  }

}
