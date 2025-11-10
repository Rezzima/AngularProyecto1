import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';

@Component({
  selector: 'app-equidos',
  imports: [CommonModule],
  templateUrl: './equidos.html',
  styleUrl: './equidos.css'
})
export class Equidos {
  public informacion: InfoAnimales[];

  constructor() {
    this.informacion = [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Biandintz_eta_zaldiak_-_modified2.jpg/250px-Biandintz_eta_zaldiak_-_modified2.jpg",
        nombre: "Equus ferus caballus",
        alt: "Caballo",
        informacion: `El caballo (Equus ferus caballus) es un mamífero perisodáctilo domesticado de la familia de los équidos. Es un herbívoro de gran porte, con cuello largo y arqueado poblado por largas crines`,
        edadProm: 20
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Wilhelma_Somaliwildesel.jpg/250px-Wilhelma_Somaliwildesel.jpg",
        nombre: "Equus africanus",
        alt: "Burro/Asno",
        informacion: "Equus africanus es una especie de équido a la que pertenecen tanto los burros domésticos como los asnos salvajes africanos",
        edadProm: 17
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Beautiful_Zebra_in_South_Africa.JPG/250px-Beautiful_Zebra_in_South_Africa.JPG",
        nombre: "Cebra",
        alt: "Cebra",
        informacion: "Etimológicamente, la palabra cebra que utilizan los hablantes de español deriva del nombre del zevro/a o cebro/a, un équido salvaje que habitó la península ibérica",
        edadProm: 10
      }
    ]
  }
  tarjetaSelect: any = null;

  verMasInfo(infoAnima: any) {
    this.tarjetaSelect = infoAnima;
  }
}
