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

export const routes: Routes = [
    /* defininmos una raiz principal */ 
    {path: "", component: Home},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: 'products', component: Products},
    {path: 'aves', component: Aves},
    {path: 'caninos', component: Caninos},
    {path: 'felinos', component: Felinos},
    {path: 'peces', component: Peces},
    {path: 'reptiles', component: Reptiles},
    {path: 'roedores', component: Roedores},
    {path: 'equidos', component: Equidos},
    {path: 'galeria', component: Galeria}
];
