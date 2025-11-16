import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Aves } from './productos/secciones/aves/aves';
import { Caninos } from './productos/secciones/caninos/caninos';
import { Felinos } from './productos/secciones/felinos/felinos';
import { Peces } from './productos/secciones/peces/peces';
import { Reptiles } from './productos/secciones/reptiles/reptiles';
import { Roedores } from './productos/secciones/roedores/roedores';
import { Equidos } from './productos/secciones/equidos/equidos';
import { Galeria } from './productos/secciones/galeria/galeria';
import { Leporidae } from './productos/secciones/leporidae/leporidae';
import { Novedades } from './pages/novedades/novedades';

export const routes: Routes = [
    /* defininmos una raiz principal */ 
    {path: "", component: Home},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: 'products', component: Products},
    {path: 'news', component: Novedades},
    {path: 'birds', component: Aves},
    {path: 'canines', component: Caninos},
    {path: 'felines', component: Felinos},
    {path: 'fish', component: Peces},
    {path: 'reptiles', component: Reptiles},
    {path: 'rodents', component: Roedores},
    {path: 'equidae', component: Equidos},
    {path: 'leporidae', component: Leporidae},
    {path: 'galery', component: Galeria}

];
