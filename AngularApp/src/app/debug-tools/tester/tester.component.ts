import { Component, OnInit } from '@angular/core';

import { Event } from '../../model/event';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {

  events: any = null;
  ID = 1;
  JSON: any;
  connectionEvent: Event;


  constructor(private api: DataService) {
    this.JSON = JSON;
   }

  ngOnInit() {

  }

  private click() {
    console.log('clicked');
  }

  private response(obj: any) {
    this.events = obj;
    if (Array.isArray(obj)) {
      this.connectionEvent = obj[0];
    } else {
      this.connectionEvent = obj;
    }

  }
}
