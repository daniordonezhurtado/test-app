import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GalleryText } from '../../model/gallery-text.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryTextService {

  constructor(private httpclient: HttpClient) { }

  getTextOfGallery(): Observable<GalleryText> {
    return this.httpclient.get<GalleryText>(environment.urlGetGalleryText);
  }
}
