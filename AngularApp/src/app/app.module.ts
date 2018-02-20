import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TesterComponent } from './debug-tools/tester/tester.component';
import { ApiService } from './api/api.service';
import { HttpModule } from '@angular/http';

import { DataService } from './data/data.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { DebugEventComponent } from './debug-tools/debug-event/debug-event.component';
import { DebugCrudComponent } from './debug-tools/debug-crud/debug-crud.component';
import { DebugCalendarComponent } from './debug-tools/debug-calendar/debug-calendar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatNativeDateModule, MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MultipleDatePickerModule } from 'multiple-date-picker-angular';
import { NewEventComponent } from './view/new-event/new-event.component';
import { DayCheckboxComponent } from './view/day-checkbox/day-checkbox.component';
import { SelectedDateComponent } from './view/selected-date/selected-date.component';
import { DateRangeAdderComponent } from './view/date-range-adder/date-range-adder.component';
import { RadioGroupComponent } from './view/radio-group/radio-group.component';
import { EventDaySelectorComponent } from './view/event-day-selector/event-day-selector.component';
import { EventViewComponent } from './view/event-view/event-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TesterComponent,
    DebugEventComponent,
    DebugCrudComponent,
    DebugCalendarComponent,
    NewEventComponent,
    DayCheckboxComponent,
    SelectedDateComponent,
    DateRangeAdderComponent,
    RadioGroupComponent,
    EventDaySelectorComponent,
    EventViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    RouterModule,

    BrowserAnimationsModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,

    MultipleDatePickerModule
  ],
  providers: [ApiService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
