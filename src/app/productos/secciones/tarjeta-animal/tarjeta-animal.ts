import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-animal',
  imports: [],
  templateUrl: './tarjeta-animal.html',
  styleUrl: './tarjeta-animal.css'
})
export class TarjetaAnimal {
  @Input() animal: any;
  // @Input(): indica que la variable que sigue va a recibir un valor desde otro componente
  // animal: es el nombre de la variable
  // any: es el tipo de dato, en este caso puede ser cualquiera, pero podria ser una interfaz
}
