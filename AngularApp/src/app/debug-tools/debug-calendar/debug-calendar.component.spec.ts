import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugCalendarComponent } from './debug-calendar.component';

describe('DebugCalendarComponent', () => {
  let component: DebugCalendarComponent;
  let fixture: ComponentFixture<DebugCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
