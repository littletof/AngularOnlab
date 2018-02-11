import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Event } from '../model/event';

@Injectable()
export class DataService {

  constructor(private api: ApiService) { }

  // gets the list of events
  public getAllEvents(): Observable<Event[]> {
    return this.api.getAllEvents();
  }

  public getEvent(id: number):  Observable<Event> {
    return this.api.getEventById(id);
  }

  public createEvent(event: Event): Observable<Event[]> {
    return this.api.createEvent(event);
  }

  public updateEvent(id: number, event: Event): Observable<boolean> {
    return this.api.updateEvent(id, event);
  }

  public deleteEvent(id: number):  Observable<Event[]> {
    return this.api.deleteEventById(id);
  }

}
