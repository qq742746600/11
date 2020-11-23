import { TestBed } from '@angular/core/testing';

import { ExequaturService } from './exequatur.service';

describe('ExequaturService', () => {
  let service: ExequaturService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExequaturService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
