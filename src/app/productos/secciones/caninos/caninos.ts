import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';

@Component({
  selector: 'app-caninos',
  imports: [CommonModule],
  templateUrl: './caninos.html',
  styleUrl: './caninos.css'
})
export class Caninos {
  public informacion: InfoAnimales[];

  constructor() {
    this.informacion = [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/African_wolf_%28Canis_lupaster%29_in_Bouhedma_National_Park.jpg/250px-African_wolf_%28Canis_lupaster%29_in_Bouhedma_National_Park.jpg",
        nombre: "Canis lupaster",
        alt: "El lobo dorado africano",
        informacion: `La especie es nativa del norte y noreste de África, donde se distribuye desde Marruecos a Egipto, a través de Senegal, Mali, Argelia, Libia y el norte de Nigeria`,
        edadProm: 10
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jackal_in_evening_breeze_in_Kumana_National_Park_%28cropped%29.jpg/250px-Jackal_in_evening_breeze_in_Kumana_National_Park_%28cropped%29.jpg",
        nombre: "Canis aureus",
        alt: "Chacal común",
        informacion: "El chacal común o dorado (Canis aureus) es una especie de mamífero carnívoro de la familia Canidae. Es parecido a su pariente próximo el lobo",
        edadProm: 9
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Canis_lupus_265b.jpg/250px-Canis_lupus_265b.jpg",
        nombre: "Canis lupus",
        alt: "Lobo",
        informacion: "El lobo (Canis lupus) es una especie de mamífero placentario del orden de los carnívoros",
        edadProm: 10
      }
    ]
  }
  tarjetaSelect: any = null;

  verMasInfo(infoAnima: any) {
    this.tarjetaSelect = infoAnima;
  }
}
