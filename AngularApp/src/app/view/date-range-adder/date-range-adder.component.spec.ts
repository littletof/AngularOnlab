import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeAdderComponent } from './date-range-adder.component';

describe('DateRangeAdderComponent', () => {
  let component: DateRangeAdderComponent;
  let fixture: ComponentFixture<DateRangeAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateRangeAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangeAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
