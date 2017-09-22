import { TestBed, inject } from '@angular/core/testing';

import { AnoteService } from './anote.service';

describe('AnoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnoteService]
    });
  });

  it('should be created', inject([AnoteService], (service: AnoteService) => {
    expect(service).toBeTruthy();
  }));
});
