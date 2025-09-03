import { TestBed } from '@angular/core/testing';

import { Demo5Service } from './demo5.service';

describe('Demo5Service', () => {
  let service: Demo5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Demo5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
