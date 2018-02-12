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


@NgModule({
  declarations: [
    AppComponent,
    TesterComponent,
    DebugEventComponent,
    DebugCrudComponent,
    DebugCalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    RouterModule
  ],
  providers: [ApiService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
