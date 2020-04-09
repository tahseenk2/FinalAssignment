import { TestBed } from '@angular/core/testing';

import { AproveListDataService } from './aprove-list-data.service';

describe('AproveListDataService', () => {
  let service: AproveListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AproveListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
