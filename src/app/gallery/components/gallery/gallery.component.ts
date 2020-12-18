import { Component, HostListener, OnInit } from '@angular/core';
import { Picture } from '../../model/picture.model';
import { PictureService } from '../../service/picture/picture.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  isTest: boolean;
  listPicture: Picture[];
  listPictureToShow: Picture[];

  constructor(private pictureService: PictureService) {
    this.listPicture = [];
    this.listPictureToShow = [];
  }

  ngOnInit(): void {
    /**
     * Debido a la versión de node que uso,
     * me da un error cuando realizo una llamada al
     * servicio desde un componente, por ello pongo esta condición
     */
    if(!this.isTest) {
      this.getListPicture();
    }
  }

  /** Obtiene las imagenes y las mapea en un
   * objeto que contendra todas y en otro que gestionara
   * las imagenes que el usuario vera por pantalla
   */
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

  /** Actualiza la lista de imagenes que vera el usuario por pantalla
  *   cuando escriba en el buscador
  */
  updatePicturesToShow(filterText: string) {
      this.listPictureToShow = filterText ?
        this.listPicture.filter(picture =>
          picture.text.includes(filterText) || picture.id === filterText
          ): this.listPicture;
  }

}
