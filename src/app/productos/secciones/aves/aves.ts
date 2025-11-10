import { Component } from '@angular/core';
import { InfoAnimales } from '../../../models/info-animales';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aves',
  imports: [CommonModule],
  templateUrl: './aves.html',
  styleUrl: './aves.css'
})
export class Aves {
  public informacion: InfoAnimales[];

  constructor() {
    this.informacion = [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Charadriiformes_Diversity.jpg/330px-Charadriiformes_Diversity.jpg",
        nombre: "Charadriiformes",
        alt: "Ave neognata",
        informacion: `Las caradriformes (Charadriiformes) son un gran clado de aves neognatas dividido en varios grupos (seis subórdenes) que presentan 351 especies`,
        edadProm: 15
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Tauraco_persa_%28captive_-_Birds_of_Eden%29.jpg/250px-Tauraco_persa_%28captive_-_Birds_of_Eden%29.jpg",
        nombre: "Musophagidae",
        alt: "Turacos",
        informacion: "Los musofágidos (Musophagidae) son una familia de aves, la única del orden Musophagiformes, conocidos vulgarmente como turacos",
        edadProm: 11
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ardeotis_kori_Etosha.JPG/250px-Ardeotis_kori_Etosha.JPG",
        nombre: "Otídidos",
        alt: "avutardas",
        informacion: "Los otídidos (Otididae) son una familia de aves de gran tamaño que incluye a las avutardas y los sisones",
        edadProm: 12
      }
    ]
  }
  tarjetaSelect: any = null;

  verMasInfo(infoAnima: any) {
    this.tarjetaSelect = infoAnima;
  }
}
