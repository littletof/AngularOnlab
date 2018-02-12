import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebugCalendarComponent } from '../debug-tools/debug-calendar/debug-calendar.component';
import { TesterComponent } from '../debug-tools/tester/tester.component';

const routes: Routes = [
    { path: 'calendar', component: DebugCalendarComponent },
    { path: '', component: TesterComponent },
    // { path: '', redirectTo: '/calendar', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
