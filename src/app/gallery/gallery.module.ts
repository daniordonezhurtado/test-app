import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { PictureComponent } from './components/picture/picture.component';
import { HttpClientModule } from '@angular/common/http';
import { PictureService } from './service/picture/picture.service';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';


@NgModule({
  declarations: [
    PictureComponent,
    GalleryComponent,
    FilterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    GalleryRoutingModule
  ],
  providers: [
    PictureService
  ]
})
export class GalleryModule { }
