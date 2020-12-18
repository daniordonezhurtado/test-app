import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PictureService } from '../../service/picture/picture.service';
import { FilterComponent } from '../filter/filter.component';
import { PictureComponent } from '../picture/picture.component';

import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let filterText;
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
        FormsModule,
        HttpClientModule
      ],
      providers: [
        HttpClient,
        PictureService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    component.isTest = true;
    fixture.detectChanges();
  });

  it('Debe crearse la galeria', () => {
    expect(component).toBeTruthy();
  });

  it('Actualizacion de las imagenes a mostrar (null)', () => {
    filterText = null;
    expect(component.updatePicturesToShow(filterText)).toBeUndefined();
  });

  it('Actualizacion de las imagenes a mostrar (ri)', () => {
    filterText = 'ri';
    expect(component.updatePicturesToShow(filterText)).toBeUndefined();
  });

});
