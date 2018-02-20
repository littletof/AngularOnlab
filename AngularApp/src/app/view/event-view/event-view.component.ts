import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Event } from '../../model/event';
import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  event: Event;
  path: string;

  constructor(private route: ActivatedRoute,
    private router: Router, private api: DataService) { }

  ngOnInit() {
    this.path = this.route.snapshot.paramMap.get('path');
    this.api.getEventByPath(this.path).subscribe(event => this.event = event);
  }

}
