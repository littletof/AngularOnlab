import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugEventComponent } from './debug-event.component';

describe('DebugEventComponent', () => {
  let component: DebugEventComponent;
  let fixture: ComponentFixture<DebugEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
