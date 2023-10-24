import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { GalleryComponent } from './componentes/core/core.component';
import { HomeComponent } from './componentes/home/home.component';
import { WhoWeAreComponent } from './componentes/who-we-are/who-we-are.component';
import { Juego1Component } from './componentes/juego1/juego1.component';
import { Juego2Component } from './componentes/juego2/juego2.component';



const RUTAS: Routes = [
  { path: 'juego', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'inicio', component: GalleryComponent },
  { path: 'proyecto', component: WhoWeAreComponent },
  { path: 'juego1', component: Juego1Component },
  { path: 'juego2', component: Juego2Component },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const app_routing = RouterModule.forRoot(RUTAS);

