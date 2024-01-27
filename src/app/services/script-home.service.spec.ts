import { TestBed } from '@angular/core/testing';

import { ScriptHomeService } from './script-home.service';

describe('ScriptHomeService', () => {
  let service: ScriptHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
