import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { Event } from '../model/event';

@Injectable()
export class DataService {

  constructor(private api: ApiService) { }

  // gets the list of events
  public getAllEvents(): Observable<Event[]> {
    return this.api.getAllEvents();
  }

  public getEvent(id: number):  Observable<Event> {
    if (id !== undefined) {
      return this.api.getEventById(id);
    }
    throw new Error('Called getEvent with undefined id');
    // return Observable.of(null);
  }

  public createEvent(event: Event): Observable<Event[]> {
    return this.api.createEvent(event);
  }

  public updateEvent(id: number, event: Event): Observable<boolean> {
    if (id !== undefined) {
      return this.api.updateEvent(id, event);
    }
    throw new Error('Called updateEvent with undefined id');
  }

  public deleteEvent(id: number):  Observable<Event[]> {
    return this.api.deleteEventById(id);
  }

}
