import { TestBed } from '@angular/core/testing';

import { LeaveDataService } from './leave-data.service';

describe('LeaveDataService', () => {
  let service: LeaveDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
