import { TestBed } from '@angular/core/testing';

import { UppercaseConverterService } from './uppercase-converter.service';

describe('UppercaseConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UppercaseConverterService = TestBed.get(UppercaseConverterService);
    expect(service).toBeTruthy();
  });
});
