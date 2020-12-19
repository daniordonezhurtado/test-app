import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GalleryRoutingModule } from './gallery-routing.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './components/filter/filter.component';
import { PictureComponent } from './components/picture/picture.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PictureService } from './service/picture/picture.service';

@NgModule({
  declarations: [
    PictureComponent,
    GalleryComponent,
    FilterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ScrollingModule,
    HttpClientModule,
    GalleryRoutingModule
  ],
  providers: [
    PictureService
  ]
})
export class GalleryModule { }
