import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAreaComponent } from './employee-area.component';

describe('EmployeeAreaComponent', () => {
  let component: EmployeeAreaComponent;
  let fixture: ComponentFixture<EmployeeAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
