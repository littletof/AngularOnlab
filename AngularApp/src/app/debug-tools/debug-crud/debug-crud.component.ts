import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-debug-crud',
  templateUrl: './debug-crud.component.html',
  styleUrls: ['./debug-crud.component.css']
})
export class DebugCrudComponent implements OnInit {

  @Input() object: any;
  @Output() response: EventEmitter<any> = new EventEmitter();

  ID: number;

  constructor(private api: DataService) { }

  ngOnInit() {
  }

  private get() {
    this.api.getAllEvents().subscribe(events => {
      console.log('get', events);
      this.return(events);
    });
  }

  private getID() {
    this.api.getEvent(this.ID).subscribe(event => {
      console.log('getid', event);
      this.return(event);
    });
  }

  private put() {
    this.api.createEvent(this.object).subscribe(sevent => {
      console.log('create', sevent);
    });
  }

  private putID() {
    this.api.updateEvent(this.ID, this.object).subscribe(sevent => {
      console.log('update', sevent);
    });
  }

  private deleteID() {
    this.api.deleteEvent(this.ID).subscribe(sevent => {
      console.log('delete', sevent);
    });
  }

  private return(object: any) {
    this.response.emit(object);
  }

}
