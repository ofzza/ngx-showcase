import { TestBed } from '@angular/core/testing';

import { NgxShowcaseService } from './ngx-showcase.service';

describe('NgxShowcaseService', () => {
  let service: NgxShowcaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxShowcaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
