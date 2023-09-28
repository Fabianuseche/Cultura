import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { GalleryComponent } from './componentes/gallery/gallery.component';
import { HomeComponent } from './componentes/home/home.component';



const RUTAS: Routes = [
  { path: 'juego', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'inicio', component: GalleryComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const app_routing = RouterModule.forRoot(RUTAS);

