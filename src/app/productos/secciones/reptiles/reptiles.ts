import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';
import { Bloque } from '../../../models/bloques';

@Component({
  selector: 'app-reptiles',
  imports: [CommonModule],
  templateUrl: './reptiles.html',
  styleUrl: './reptiles.css'
})
export class Reptiles {
  public informacion: InfoAnimales[];
    public bloqueInfo: Bloque[] = [
      {
        titulo: "Caiman crocodilus",
        img: "../../../assets/caiman_coso_de_anteojos.jpg",
        informacion: "Los machos llegan a medir entre 1,8 y 2,5 m de largo, y las hembras 1,4 m. Se alimentan de diferentes especies de animales: crustáceos, peces, anfibios, reptiles, aves y mamíferos grandes y pequeños"
      },
      {
        titulo: "",
        img: "../../../assets/otro_caiman.jpg",
        informacion: "El apareamiento ocurre en la estación lluviosa. La hembra hace el nido aglomerando pequeñas cantidades de vegetación seca y tierra y pone allí de 15 a 40 huevos"
      },
      {
        titulo: "",
        img: "../../../assets/otros_dos_caimanes.jpg",
        informacion: "La incubación dura un promedio de 13 semanas. Al nacer, las crías miden unos 20 cm y son protegidas de forma agresiva por la hembra"
      },
      {
        titulo: "Paleosuchus trigonatus",
        img: "../../../assets/bicho_fiero.jpg",
        informacion: "Su cuero es de color marrón grisáceo oscuro con ojos de color marrón medio. Los machos crecen entre 1,7 y 2,3 m de largo, y el espécimen más grande registrado midió 2,6 m"
      },
      {
        titulo: "",
        img: "../../../assets/bicho_fiero_dos.jpg",
        informacion: "Las hembras no suelen superar los 1,4 m. No presenta cresta ósea o 'gafas' entre los ojos. Es un cocodrilo robusto, fuerte para su tamaño, y tiende a llevar la cabeza alta con el cuello inclinado hacia arriba"
      },
      {
        titulo: "",
        img: "../../../assets/bicho_fiero_tres.jpg",
        informacion: "Su distribución comprende la cuenca del Amazonas; desde Colombia y Ecuador hasta el norte de Bolivia, Venezuela hacia el este hasta las Guayanas y desembocadura del río Amazonas al norte de Brasil"
      },
      {
        titulo: "Mecistops cataphractus",
        img: "../../../assets/crocoilo.jpg",
        informacion: "Este cocodrilo habita zonas occidentales del África Central, mayoritariamente Congo y Costa de Marfil, en ocasiones cerca de las desembocaduras, llegando incluso a encontrarse ejemplares en la isla de Bioko lo que demuestra cierta tolerancia a la salinidad"
      },
      {
        titulo: "",
        img: "../../../assets/crocoilo_dos.jpg",
        informacion: "Estudios recientes en ADN y morfología sugieren que pueda pertenecer a su propio género, Mecistops, pero actualmente la mayoría continúa catalogándolo dentro de los Crocodylus"
      },
      {
        titulo: "",
        img: "../../../assets/crocoilo_tres.jpg",
        informacion: "Este animal se reproduce al principio de la estación húmeda, normalmente la hembra sitúa la nidada en zonas bajas cercanas al cauce de los ríos, empleando para su construcción fango, hojas y pequeñas ramas de árboles. Pone de 13 a 25 huevos"
      }
    ]

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
