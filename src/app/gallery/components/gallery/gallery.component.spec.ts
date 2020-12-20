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
    component.listPictures = [];
    component.listPicturesToShow = [];
    fixture.detectChanges();
  });

  it('should create gallery component', () => {
    expect(component).toBeTruthy();
  });

  it('should update the pictures to show (null)', () => {
    filterText = null;
    expect(component.updatePicturesToShow(filterText)).toBeUndefined();
  });

  it('should update the pictures to show (ri)', () => {
    filterText = 'ri';
    expect(component.updatePicturesToShow(filterText)).toBeUndefined();
  });

  it('should compare ignoring uppercase (pRueBa, Prueba)', () => {
    let textMain = 'pRueBa';
    let textToCheck = 'Prueba';
    expect(component.includesIgnoreCase(textMain, textToCheck)).toBeTrue();
  });

  it('should compare ignoring uppercase (prueba, test)', () => {
    let textMain = 'prueba';
    let textToCheck = 'test';
    expect(component.includesIgnoreCase(textMain, textToCheck)).toBeFalsy();
  });

  it('should compare ignoring uppercase (prueba, null)', () => {
    let textMain = 'prueba';
    let textToCheck = 'null';
    expect(component.includesIgnoreCase(textMain, textToCheck)).toBeFalsy();
  });

  it('should compare ignoring uppercase (null, prueba)', () => {
    let textMain = 'null';
    let textToCheck = 'prueba';
    expect(component.includesIgnoreCase(textMain, textToCheck)).toBeFalsy();
  });

});
