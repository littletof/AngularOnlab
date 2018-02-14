import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCheckboxComponent } from './day-checkbox.component';

describe('DayCheckboxComponent', () => {
  let component: DayCheckboxComponent;
  let fixture: ComponentFixture<DayCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
