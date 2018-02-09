import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

import { Event } from '../model/event';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {

  events: Event[] = [];
  JSON: any;
  
  constructor(private api: ApiService) {
    this.JSON = JSON;
   }

  ngOnInit() {
    this.api.getTest().subscribe(events => {
      this.events = events;
    });

    console.log(this.events);
  }

}
