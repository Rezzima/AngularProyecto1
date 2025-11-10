import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';

@Component({
  selector: 'app-felinos',
  imports: [CommonModule],
  templateUrl: './felinos.html',
  styleUrl: './felinos.css'
})
export class Felinos {
  public informacion: InfoAnimales[];

  constructor() {
    this.informacion = [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Caracal_on_the_road%2C_early_morning_in_Kgalagadi_%2836173878220%29.jpg/330px-Caracal_on_the_road%2C_early_morning_in_Kgalagadi_%2836173878220%29.jpg",
        nombre: "Caracal caracal",
        alt: "Caracal",
        informacion: `El caracal (Caracal caracal) es una especie de mamífero carnívoro del género Caracal, de la familia Felidae. Es un felino de tamaño medio`,
        edadProm: 16
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bay_cat_1_Jim_Sanderson-cropped.jpg/250px-Bay_cat_1_Jim_Sanderson-cropped.jpg",
        nombre: "Catopuma badia",
        alt: "Gato de Borneo",
        informacion: "El gato de Borneo (Catopuma badia), conocido también como gato de la bahía o gato rojo de Borneo, es un felino endémico de la isla de Borneo",
        edadProm: 14
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Chinese_Mountain_Cat_%28Felis_Bieti%29_in_XiNing_Wild_Zoo.jpg/250px-Chinese_Mountain_Cat_%28Felis_Bieti%29_in_XiNing_Wild_Zoo.jpg",
        nombre: "Felis bieti",
        alt: "Gato chino del desierto",
        informacion: "El gato chino del desierto, gato montés chino o gato de Biet (Felis bieti) es una especie de mamífero carnívoro de la familia Felidae",
        edadProm: 10
      }
    ]
  }
  tarjetaSelect: any = null;

  verMasInfo(infoAnima: any) {
    this.tarjetaSelect = infoAnima;
  }
}
