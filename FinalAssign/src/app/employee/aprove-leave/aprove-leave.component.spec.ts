import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveLeaveComponent } from './aprove-leave.component';

describe('AproveLeaveComponent', () => {
  let component: AproveLeaveComponent;
  let fixture: ComponentFixture<AproveLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproveLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproveLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
