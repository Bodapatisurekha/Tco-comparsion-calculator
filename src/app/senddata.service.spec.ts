import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SenddataService } from './senddata.service';

describe('SenddataService', () => {
  let service: SenddataService;

  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClient]
    });
    service = TestBed.inject(SenddataService);
  });
  

  //it('should be created', () => {
   // expect(service).toBeTruthy();
  //});
});
