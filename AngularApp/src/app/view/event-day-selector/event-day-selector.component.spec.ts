import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDaySelectorComponent } from './event-day-selector.component';

describe('EventDaySelectorComponent', () => {
  let component: EventDaySelectorComponent;
  let fixture: ComponentFixture<EventDaySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventDaySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDaySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
