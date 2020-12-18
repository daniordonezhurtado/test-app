import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PictureService } from '../../service/picture/picture.service';
import { FilterComponent } from '../filter/filter.component';
import { PictureComponent } from '../picture/picture.component';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GalleryComponent,
        PictureComponent,
        FilterComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        PictureService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
