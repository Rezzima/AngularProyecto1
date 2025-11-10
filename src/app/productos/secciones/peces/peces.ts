import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';

@Component({
  selector: 'app-peces',
  imports: [CommonModule],
  templateUrl: './peces.html',
  styleUrl: './peces.css'
})
export class Peces {
  public informacion: InfoAnimales[];

  constructor() {
    this.informacion = [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Oceanic_Whitetip_Shark_%28Carcharhinus_longimanus%29_at_Elphinstone_Reef%2C_Egypt.jpg/250px-Oceanic_Whitetip_Shark_%28Carcharhinus_longimanus%29_at_Elphinstone_Reef%2C_Egypt.jpg",
        nombre: "Carcharhiniformes",
        alt: "Tiburon terrestre",
        informacion: `Carcharhiniformes es un orden de peces seláqueos del superorden Galeomorphi, conocidos coloquialmente como tiburones terrestres`,
        edadProm: 15
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Ragged-tooth_shark_during_winter_at_Aliwal_Shoal.jpg/250px-Ragged-tooth_shark_during_winter_at_Aliwal_Shoal.jpg",
        nombre: "Lamniformes",
        alt: "Tiburon caballa",
        informacion: "Lamniformes es un orden de peces seláqueos del superorden Galeomorphi, conocidos popularmente como tiburones caballa",
        edadProm: 18
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orectolobus_maculatus_2.jpg/250px-Orectolobus_maculatus_2.jpg",
        nombre: "Orectolobiformes",
        alt: "Tiburon Carpeta",
        informacion: "Orectolobiformes es un orden de peces seláqueos del superorden Galeomorphi, conocidos popularmente como tiburones carpeta.",
        edadProm: 14
      }
    ]
  }
  tarjetaSelect: any = null;

  verMasInfo(infoAnima: any) {
    this.tarjetaSelect = infoAnima;
  }
}
