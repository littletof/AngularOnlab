import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-debug-calendar',
  templateUrl: './debug-calendar.component.html',
  styleUrls: ['./debug-calendar.component.css']
})
export class DebugCalendarComponent implements OnInit {

  model: NgbDateStruct;

  constructor() { }

  ngOnInit() {
  }

}
