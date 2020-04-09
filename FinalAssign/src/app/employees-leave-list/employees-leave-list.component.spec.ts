import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesLeaveListComponent } from './employees-leave-list.component';

describe('EmployeesLeaveListComponent', () => {
  let component: EmployeesLeaveListComponent;
  let fixture: ComponentFixture<EmployeesLeaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesLeaveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesLeaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
