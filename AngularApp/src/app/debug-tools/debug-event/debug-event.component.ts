import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Event } from '../../model/event';

@Component({
  selector: 'app-debug-event',
  templateUrl: './debug-event.component.html',
  styleUrls: ['./debug-event.component.css']
})
export class DebugEventComponent implements OnInit {

  @Input() event: Event;
  @Output() eventChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public changed() {
    this.eventChange.emit(event);
  }

}
