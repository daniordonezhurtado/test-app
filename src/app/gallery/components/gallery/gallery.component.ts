import { Component, HostListener, OnInit } from '@angular/core';
import { Picture } from '../../model/picture.model';
import { PictureService } from '../../service/picture/picture.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  listPicture: Picture[];
  listPictureToShow: Picture[];

  constructor(private pictureService: PictureService) {
    this.listPicture = [];
    this.listPictureToShow = [];
  }

  ngOnInit(): void {
    this.getListPicture();
  }

  getListPicture() {
    this.pictureService.getPicture().subscribe(
      (response) => {
        if(response) {
          Object.assign(this.listPicture, response);
          Object.assign(this.listPictureToShow, this.listPicture);
        }
      },
      (error) => {
        console.log(error);
      });
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    //console.log(window.pageYOffset);
  }

  updatePicturesToShow(filterText: string) {
      this.listPictureToShow = filterText ?
        this.listPicture.filter(picture =>
          picture.text.includes(filterText) || picture.id === filterText
          ): this.listPicture;
  }

}
