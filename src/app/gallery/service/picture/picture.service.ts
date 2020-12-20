import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Picture } from '../../model/picture.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private httpclient: HttpClient) { }

  getInformationOfPictures(): Observable<Picture> {
    return this.httpclient.get<Picture>(environment.urlGetInformationOfPictures);
  }
}
