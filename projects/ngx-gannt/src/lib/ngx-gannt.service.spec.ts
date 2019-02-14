import { TestBed } from '@angular/core/testing';

import { NgxGanntService } from './ngx-gannt.service';

describe('NgxGanntService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxGanntService = TestBed.get(NgxGanntService);
    expect(service).toBeTruthy();
  });
});
