import { TestBed } from '@angular/core/testing';

import { UnauthorizeduserpaymentService } from './unauthorizeduserpayment.service';

describe('UnauthorizeduserpaymentService', () => {
  let service: UnauthorizeduserpaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnauthorizeduserpaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
