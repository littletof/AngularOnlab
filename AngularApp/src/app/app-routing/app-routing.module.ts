import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebugCalendarComponent } from '../debug-tools/debug-calendar/debug-calendar.component';
import { TesterComponent } from '../debug-tools/tester/tester.component';
import { NewEventComponent } from '../view/new-event/new-event.component';
import { EventViewComponent } from '../view/event-view/event-view.component';

const routes: Routes = [
    { path: 'calendar', component: DebugCalendarComponent },
    { path: 'new', component: NewEventComponent },
    { path: 'event/:path', component: EventViewComponent },
    { path: '', component: TesterComponent },
    // { path: '', redirectTo: '/calendar', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
