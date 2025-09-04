import { TestBed } from '@angular/core/testing';

import { YuGiOhService } from './yu-gi-oh.service';

describe('YuGiOhService', () => {
  let service: YuGiOhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YuGiOhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
