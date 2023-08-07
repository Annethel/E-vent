import { TestBed } from '@angular/core/testing';

import { FileUploadserviceService } from './file-uploadservice.service';

describe('FileUploadserviceService', () => {
  let service: FileUploadserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploadserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
