import { TestBed } from '@angular/core/testing';

import { AddToCarService } from './carrinho.service';

describe('AddToCarService', () => {
  let service: AddToCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
