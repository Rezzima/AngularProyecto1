import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../models/info-animales';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  public infoAnima: InfoAnimales[];

  constructor() {
    this.infoAnima = [
      {
        id: 1,
        img: "../../../assets/jacob.jpg",
        nombre: "Jacobo",
        alt: "Perro Jacobo",
        informacion: `Se llama jacobo`,
        edadProm: 9999
      },
      {
        id: 2,
        img: "../../../assets/jerbo.jpg",
        nombre: "Dipodidae",
        alt: "Roedor Jerbo",
        informacion: `Los dipodinos (Dipodinae) son una subfamilia de roedores miomorfos
         de la familia Dipodidae conocidos vulgarmente como jerbos o gerbos`,
        edadProm: 4
      },
      {
        id: 3,
        img: "../../../assets/evil_jacob.png",
        nombre: "Evil Jacobo",
        alt: "Gato Jacobo",
        informacion: `no se llama jacobo`,
         edadProm: -9999
      }
    ]
  }
  tarjetaSelect: any = null;

  verMasInfo(infoAnima: any) {
    this.tarjetaSelect = infoAnima;
  }
}
