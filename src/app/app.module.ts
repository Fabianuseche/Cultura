import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { GalleryComponent } from './componentes/gallery/gallery.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    app_routing 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
