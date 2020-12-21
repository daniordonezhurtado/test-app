import { Component, OnInit, ViewChild } from '@angular/core';
import { PictureComponent } from '../picture/picture.component';
import { PictureService } from '../../service/picture/picture.service';
import { Picture } from '../../model/picture.model';
import { GalleryTextService } from '../../service/gallery-text/gallery-text.service';
import { GalleryText } from '../../model/gallery-text.model';
import { FilterText } from '../../model/filter-text.model';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @ViewChild(PictureComponent) pictureComponent: PictureComponent;

  isTest: boolean;
  listPictures: Picture[];
  listPicturesToShow: Picture[];
  galleryText: GalleryText;

  constructor(private pictureService: PictureService,
    private galleryTextService: GalleryTextService) {}

  ngOnInit(): void {

    this.galleryText = new GalleryText();
    this.galleryText.filterText = new FilterText();

    if(!this.isTest) {
      this.getGalleryText();
      this.getListPicture();
    }
  }

  getGalleryText() {
    this.galleryTextService.getTextOfGallery().subscribe(response => {
      if(response) {
        Object.assign(this.galleryText, response);

        this.galleryText.filterText = this.galleryText.filterText ?
          this.galleryText.filterText : new FilterText();
      }
    });
  }

  getListPicture(): void {
    this.pictureService.getInformationOfPictures().subscribe(
      (response) => {
        this.listPictures = [];
        this.listPicturesToShow = [];

        if(response) {
          Object.assign(this.listPictures, response);
          Object.assign(this.listPicturesToShow, this.listPictures);
        }
      },
      (error) => {
        this.listPictures = [];
        this.listPicturesToShow = [];
      });
  }

  updatePicturesToShow(filterText: string): void {
    this.listPicturesToShow = filterText ?
      this.listPictures.filter(picture =>
        this.includesIgnoreCase(picture.text, filterText) || picture.id === filterText)
        : this.listPictures;

    if(this.pictureComponent) {
      this.pictureComponent.reloadScroll();
    }
  }

  includesIgnoreCase(textMain: string, textToCheck: string): boolean {
    return textMain && textToCheck && textMain.toLowerCase().includes(textToCheck.toLowerCase());
  }

}
