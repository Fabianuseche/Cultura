import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { GalleryComponent } from './componentes/core/core.component';
import { HomeComponent } from './componentes/home/home.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent,
    WhoWeAreComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    ImageModule,
    app_routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
