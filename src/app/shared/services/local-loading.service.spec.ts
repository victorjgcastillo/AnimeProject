import { TestBed } from '@angular/core/testing';

import { LocalLoadingService } from './local-loading.service';

describe('LocalLoadingService', () => {
  let service: LocalLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
