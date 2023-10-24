import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { GalleryComponent } from './componentes/core/core.component';
import { HomeComponent } from './componentes/home/home.component';

import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { WhoWeAreComponent } from './componentes/who-we-are/who-we-are.component';
import { Juego2Component } from './componentes/juego2/juego2.component';
import { Juego1Component } from './componentes/juego1/juego1.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent,
    WhoWeAreComponent,
    Juego2Component,
    Juego1Component,


  ],
  imports: [
    BrowserModule,
    TabViewModule,
    ImageModule,
    app_routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
