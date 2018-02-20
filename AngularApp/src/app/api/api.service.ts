import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Event } from '../model/event';
import { Entry } from '../model/entry';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  public getTest(): Observable<Event[]> {
    return this.http
      .get(API_URL + '/default')
      .map(response => {
          const events = response.json();
          return events.map((event) => event as Event[]);
    })
    .catch(this.handleError);
  }

  // API: GET /events
  public getAllEvents(): Observable<Event[]> {
    return this.http
      .get(API_URL + '/events')
      .map(response => {
          const events = response.json();
          return Event.parseArray(events);
    })
    .catch(this.handleError);
  }

  // API: POST /events
  public createEvent(c_event: Event): Observable<Event[]> {
    return this.http
    .post(API_URL + '/events', c_event)
    .map(response => {
        const event = response.json();
        return Event.parseEvent(event);
  })
  .catch(this.handleError);
  }

  // API: GET /events/:id
  public getEventById(eventId: number): Observable<Event> {
    return this.http
      .get(API_URL + '/events/' + eventId)
      .map(response => {
          const event = response.json();
          return Event.parseEvent(event);
    })
    .catch(this.handleError);
  }

  // API: PUT /events/:id
  public updateEvent(id: number, u_event: Event): Observable<boolean> {
    return this.http
    .put(API_URL + '/events/' + id, u_event)
    .map(response => {
        return response.json();
    })
    .catch(this.handleError);
  }

  // DELETE /events/:id
  public deleteEventById(eventId: number): Observable<Event[]> {
    return this.http
      .delete(API_URL + '/events/' + eventId)
      .map(response => {
          const event = response.json();
          return Event.parseEvent(event);
    })
    .catch(this.handleError);
  }




  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
