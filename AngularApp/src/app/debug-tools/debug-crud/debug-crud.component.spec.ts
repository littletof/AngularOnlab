import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugCrudComponent } from './debug-crud.component';

describe('DebugCrudComponent', () => {
  let component: DebugCrudComponent;
  let fixture: ComponentFixture<DebugCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
