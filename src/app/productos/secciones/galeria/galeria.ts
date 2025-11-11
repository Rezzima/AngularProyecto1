import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Caninos } from '../caninos/caninos';
import { Felinos } from '../felinos/felinos';
import { Aves } from '../aves/aves';
import { Reptiles } from '../reptiles/reptiles';
import { Peces } from '../peces/peces';
import { Leporidae } from '../leporidae/leporidae';
import { Roedores } from '../roedores/roedores';
import { TarjetaAnimal } from '../tarjeta-animal/tarjeta-animal';


@Component({
  selector: 'app-galeria',
  imports: [CommonModule, TarjetaAnimal],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {

  categorias = [
    { nombre: 'Caninos', animales: new Caninos().informacion },
    { nombre: 'Felinos', animales: new Felinos().informacion },
    { nombre: 'Aves', animales: new Aves().informacion },
    { nombre: 'Reptiles', animales: new Reptiles().informacion },
    { nombre: 'Peces', animales: new Peces().informacion },
    { nombre: 'Leporidae', animales: new Leporidae().informacion },
    { nombre: 'Roedores', animales: new Roedores().informacion }
  ]
  tarjetaSeleccionada: any = null;
  
  verMasInfo(animal: any) {
    this.tarjetaSeleccionada = animal;
  }
}
