import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GalleryTextService } from './gallery-text.service';

describe('GalleryTextService', () => {
  let service: GalleryTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(GalleryTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test service to get texts of gallery', () => {
    expect(service.getTextOfGallery()).toBeDefined();
  });
});
