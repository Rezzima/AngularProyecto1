import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';

@Component({
  selector: 'app-leporidae',
  imports: [CommonModule],
  templateUrl: './leporidae.html',
  styleUrl: './leporidae.css'
})
export class Leporidae {
  public informacion: InfoAnimales[];

  constructor() {
    this.informacion = [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Pentalagus_furnessi_387708672.jpg/250px-Pentalagus_furnessi_387708672.jpg",
        nombre: "Pentalagus furnessie",
        alt: "Conejo de Amami",
        informacion: `El conejo de Amami, de Ryukyu o de orejas cortas (Pentalagus furnessi) es una especie de mamífero lagomorfo de la familia Leporidae`,
        edadProm: 10
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Romerolagus_diazi_-_Zoologico_de_Chapultepec%2C_Ciudad_de_M%C3%A9xico_-_Cropped.jpg/330px-Romerolagus_diazi_-_Zoologico_de_Chapultepec%2C_Ciudad_de_M%C3%A9xico_-_Cropped.jpg",
        nombre: "Romerolagus diazi",
        alt: "Conejo de los Volcanes",
        informacion: `El conejo de los volcanes (Romerolagus diazi), también conocido como teporingo, zacatuche, tepolito, tepol o burrito, es una especie de mamífero lagomorfo de la familia Leporidae`,
        edadProm: 8
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Polarhase_1_1997-08-04.jpg/250px-Polarhase_1_1997-08-04.jpg",
        nombre: "Lepus",
        alt: "Liebre",
        informacion: `Por lo general las liebres son animales de silueta estilizada y patas traseras muy desarrolladas para la carrera. Las orejas, generalmente largas, varían en longitud de unas especies a otras`,
        edadProm: 15
      }
    ]
  }
  tarjetaSelect: any = null;

  verMasInfo(infoAnima: any) {
    this.tarjetaSelect = infoAnima;
  }
}

