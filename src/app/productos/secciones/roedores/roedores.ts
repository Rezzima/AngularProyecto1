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
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Abrocoma_bennettii.png/250px-Abrocoma_bennettii.png",
        nombre: "Abrocomidae",
        alt: "Chinchilla",
        informacion: `Las ratas chinchillas son miembros de la familia Abrocomidae. Son similares a las chinchillas con su textura y su color, pero su estructura corporal es más parecida a una rata`,
        edadProm: 10
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Majas.jpg/250px-Majas.jpg",
        nombre: "Cuniculus",
        alt: "Pacas",
        informacion: "Cuniculus es un género de roedores histricomorfos, el único de la familia Cuniculidae, propios de Sudamérica, que contiene a las dos especies conocidas vulgarmente como pacas.",
        edadProm: 14
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Dasyprocta_azarae.JPG/250px-Dasyprocta_azarae.JPG",
        nombre: "Dasyprocta azarae",
        alt: "Aguti de Azara",
        informacion: "El agutí de Azara (Dasyprocta azarae), (llamado así en honor al naturalista español Félix de Azara) es una especie de roedor histricomorfo de la familia Dasyproctidae autóctona de Paraguay",
        edadProm: 10
      }
    ]
  }
  tarjetaSelect: any = null;

  verMasInfo(infoAnima: any) {
    this.tarjetaSelect = infoAnima;
  }
}
