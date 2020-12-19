import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Picture } from '../../model/picture.model';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private httpclient: HttpClient) { }

  getInformationOfPictures(): Observable<Picture> {
    return this.httpclient.get<Picture>('./assets/mocks/getImage.json');
  }
}
