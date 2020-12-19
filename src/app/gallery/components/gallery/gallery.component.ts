import { Component, OnInit, ViewChild } from '@angular/core';
import { PictureComponent } from '../picture/picture.component';
import { PictureService } from '../../service/picture/picture.service';
import { Picture } from '../../model/picture.model';


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

  constructor(private pictureService: PictureService) {}

  ngOnInit(): void {
    if(!this.isTest) {
      this.getListPicture();
    }
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

  includesIgnoreCase(text1: string, text2: string): boolean {
    return text1 && text2 && text1.toLowerCase().includes(text2.toLowerCase());
  }

}
