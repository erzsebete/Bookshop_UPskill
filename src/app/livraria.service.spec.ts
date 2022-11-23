import { TestBed } from '@angular/core/testing';

import { LivrariaService } from './livraria.service';

describe('LivrariaService', () => {
  let service: LivrariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivrariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
