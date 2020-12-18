import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private httpclient: HttpClient) { }

  getPicture(): Observable<any> {
    return this.httpclient.get('./assets/mocks/getImage.json');
  }
}
