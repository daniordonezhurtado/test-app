import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryRoutingModule } from './gallery/gallery-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleryRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
