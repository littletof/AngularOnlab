import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

import { Event } from '../../model/event';
import { isNull } from 'util';

@Component({
  selector: 'app-debug-event',
  templateUrl: './debug-event.component.html',
  styleUrls: ['./debug-event.component.css']
})
export class DebugEventComponent implements OnChanges, OnInit {

  @Input() event: Event = new Event(null, 'Title', null, null, 'Name', 'Email', 'desc');
  @Output() eventChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const event: SimpleChange = changes.event;

    this.display(event.currentValue);

  }

  private display(obj: any) {
    if (!obj) {
      this.event = new Event(null, 'Title', null, null, 'Name', 'Email', 'desc');

    } else if (Array.isArray(obj)) {
      this.display(obj[0]);

    } else {
      this.event = obj;
    }
  }

  public changed() {
    this.eventChange.emit(event);
  }

}
