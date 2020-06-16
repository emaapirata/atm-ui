import { TestBed } from '@angular/core/testing';

import { AtmsService } from './atms.service';

describe('AtmsService', () => {
  let service: AtmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
