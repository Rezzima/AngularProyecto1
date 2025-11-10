import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';

@Component({
  selector: 'app-roedores',
  imports: [CommonModule],
  templateUrl: './roedores.html',
  styleUrl: './roedores.css'
})
export class Roedores {
  public informacion: InfoAnimales[];

  constructor() {
    this.informacion = [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Spectacled_Caiman.JPG/250px-Spectacled_Caiman.JPG",
        nombre: "Caiman crocodilus",
        alt: "Caiman de anteojos",
        informacion: `El caimán de anteojos (Caiman crocodilus), también conocido como cachirre, blanco, guagipal, babilla o baba, es una especie de reptil carnívoro`,
        edadProm: 10
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Paleosuchus-trigonatus.jpg/250px-Paleosuchus-trigonatus.jpg",
        nombre: "Paleosuchus trigonatus",
        alt: "Caiman Postruso",
        informacion: "El caimán postruso, cachirre o dirin-dirin (Amazonía peruana) (Paleosuchus trigonatus), es una de las dos especies del género Paleosuchus",
        edadProm: 14
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Crocodylus_cataphractus_faux-gavial_d%27Afrique2.JPG/250px-Crocodylus_cataphractus_faux-gavial_d%27Afrique2.JPG",
        nombre: "Mecistops cataphractus",
        alt: "Cocodrilo hociquifino africano",
        informacion: "El cocodrilo hociquifino africano (Mecistops cataphractus) es una especie de saurópsido crocodilio catalogada como tal por Cuvier en 1825",
        edadProm: 10
      }
    ]
  }
  tarjetaSelect: any = null;

  verMasInfo(infoAnima: any) {
    this.tarjetaSelect = infoAnima;
  }
}
