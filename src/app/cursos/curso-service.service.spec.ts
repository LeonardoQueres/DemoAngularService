import { TestBed } from '@angular/core/testing';

import { CursoService } from './curso-service.service';

describe('CursoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursoService = TestBed.get(CursoService);
    expect(service).toBeTruthy();
  });
});
