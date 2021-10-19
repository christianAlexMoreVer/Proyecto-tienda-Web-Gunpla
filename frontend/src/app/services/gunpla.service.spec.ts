import { TestBed } from '@angular/core/testing';

import { GunplaService } from './gunpla.service';

describe('GunplaService', () => {
  let service: GunplaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GunplaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
