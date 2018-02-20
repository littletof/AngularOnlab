import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Event } from '../../model/event';
import { DataService } from '../../data/data.service';
import { MultipleDatePickerComponent } from 'multiple-date-picker-angular/dist';
import { DatePickerHacker } from '../multiple-date-picker/hack-multiple-date-picker';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  event: Event;
  path: string;

  @ViewChild(MultipleDatePickerComponent)
  datePicker: MultipleDatePickerComponent;

  constructor(private route: ActivatedRoute,
    private router: Router, private api: DataService) { }

  ngOnInit() {
    this.path = this.route.snapshot.paramMap.get('path');

    DatePickerHacker.hackDatePicker(this.datePicker, []);
    this.api.getEventByPath(this.path).subscribe(event => {
      this.event = event;
      (this.datePicker as any).refreshAllowed(event.selectedDays);
    });

  }

}
