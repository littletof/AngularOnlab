import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TesterComponent } from './tester/tester.component';
import { ApiService } from './api/api.service';
import { HttpModule } from '@angular/http';
import { DataService } from './data/data.service';
import { DebugEventComponent } from './debug-tools/debug-event/debug-event.component';


@NgModule({
  declarations: [
    AppComponent,
    TesterComponent,
    DebugEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
