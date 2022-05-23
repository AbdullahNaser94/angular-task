import { TestBed } from '@angular/core/testing';

import { TokenInterceptoService } from './token-intercepto.service';

describe('TokenInterceptoService', () => {
  let service: TokenInterceptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
