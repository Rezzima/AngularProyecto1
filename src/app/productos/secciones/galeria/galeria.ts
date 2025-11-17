import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})
export class Galeria {
  public informacion: InfoAnimales[];
  constructor() {
    this.informacion = [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Tringa_brevipes.jpg/250px-Tringa_brevipes.jpg",
        nombre: "Scolopacidae",
        alt: "Correlimo",
        descripcionCorta: "Familia de aves costeras pequeñas y medianas, como playeros y correlimos.",
        informacion: `Los escolopácidos (Scolopacidae) son una familia de aves caradriformes. Es una familia grande y diversa de pequeñas y medianas aves costeras`,
        edadProm: 15
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Tauraco_persa_%28captive_-_Birds_of_Eden%29.jpg/250px-Tauraco_persa_%28captive_-_Birds_of_Eden%29.jpg",
        nombre: "Musophagidae",
        alt: "Turacos",
        descripcionCorta: "Familia de aves africanas coloridas conocidas como turacos.",
        informacion: "Los musofágidos (Musophagidae) son una familia de aves, la única del orden Musophagiformes, conocidos vulgarmente como turacos",
        edadProm: 11
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Ardeotis_kori_Etosha.JPG/250px-Ardeotis_kori_Etosha.JPG",
        nombre: "Otídidos",
        alt: "avutardas",
        descripcionCorta: "Familia de aves terrestres grandes como las avutardas y sisones.",
        informacion: "Los otídidos (Otididae) son una familia de aves de gran tamaño que incluye a las avutardas y los sisones",
        edadProm: 12
      },
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/African_wolf_%28Canis_lupaster%29_in_Bouhedma_National_Park.jpg/250px-African_wolf_%28Canis_lupaster%29_in_Bouhedma_National_Park.jpg",
        nombre: "Canis lupaster",
        alt: "El lobo dorado africano",
        descripcionCorta: "Especie de cánido africano similar al lobo pero de menor tamaño.",
        informacion: `La especie es nativa del norte y noreste de África, donde se distribuye desde Marruecos a Egipto, a través de Senegal, Mali, Argelia, Libia y el norte de Nigeria`,
        edadProm: 10
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jackal_in_evening_breeze_in_Kumana_National_Park_%28cropped%29.jpg/250px-Jackal_in_evening_breeze_in_Kumana_National_Park_%28cropped%29.jpg",
        nombre: "Canis aureus",
        alt: "Chacal común",
        descripcionCorta: "Cánido oportunista parecido a un lobo pequeño.",
        informacion: "El chacal común o dorado (Canis aureus) es una especie de mamífero carnívoro de la familia Canidae. Es parecido a su pariente próximo el lobo",
        edadProm: 9
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Canis_lupus_265b.jpg/250px-Canis_lupus_265b.jpg",
        nombre: "Canis lupus",
        alt: "Lobo",
        descripcionCorta: "Especie de cánido ampliamente distribuida y antecesora del perro.",
        informacion: "El lobo (Canis lupus) es una especie de mamífero placentario del orden de los carnívoros",
        edadProm: 10
      },
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Biandintz_eta_zaldiak_-_modified2.jpg/250px-Biandintz_eta_zaldiak_-_modified2.jpg",
        nombre: "Equus ferus caballus",
        alt: "Caballo",
        descripcionCorta: "Subespecie domesticada de équido usada por el ser humano desde hace milenios.",
        informacion: `El caballo (Equus ferus caballus) es un mamífero perisodáctilo domesticado de la familia de los équidos. Es un herbívoro de gran porte, con cuello largo y arqueado poblado por largas crines`,
        edadProm: 20
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Wilhelma_Somaliwildesel.jpg/250px-Wilhelma_Somaliwildesel.jpg",
        nombre: "Equus africanus",
        alt: "Burro/Asno",
        descripcionCorta: "Especie de équido que incluye tanto burros domésticos como asnos salvajes.",
        informacion: "Equus africanus es una especie de équido a la que pertenecen tanto los burros domésticos como los asnos salvajes africanos",
        edadProm: 17
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Beautiful_Zebra_in_South_Africa.JPG/250px-Beautiful_Zebra_in_South_Africa.JPG",
        nombre: "Cebra",
        alt: "Cebra",
        descripcionCorta: "Équido africano reconocible por su característico patrón de rayas.",
        informacion: "Etimológicamente, la palabra cebra que utilizan los hablantes de español deriva del nombre del zevro/a o cebro/a, un équido salvaje que habitó la península ibérica",
        edadProm: 10
      },
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Caracal_on_the_road%2C_early_morning_in_Kgalagadi_%2836173878220%29.jpg/330px-Caracal_on_the_road%2C_early_morning_in_Kgalagadi_%2836173878220%29.jpg",
        nombre: "Caracal caracal",
        alt: "Caracal",
        descripcionCorta: "Felino de tamaño medio conocido por sus orejas largas con penachos.",
        informacion: `El caracal (Caracal caracal) es una especie de mamífero carnívoro del género Caracal, de la familia Felidae. Es un felino de tamaño medio`,
        edadProm: 16
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bay_cat_1_Jim_Sanderson-cropped.jpg/250px-Bay_cat_1_Jim_Sanderson-cropped.jpg",
        nombre: "Catopuma badia",
        alt: "Gato de Borneo",
        descripcionCorta: "Felino pequeño y raro endémico de la isla de Borneo.",
        informacion: "El gato de Borneo (Catopuma badia), conocido también como gato de la bahía o gato rojo de Borneo, es un felino endémico de la isla de Borneo",
        edadProm: 14
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Chinese_Mountain_Cat_%28Felis_Bieti%29_in_XiNing_Wild_Zoo.jpg/250px-Chinese_Mountain_Cat_%28Felis_Bieti%29_in_XiNing_Wild_Zoo.jpg",
        nombre: "Felis bieti",
        alt: "Gato chino del desierto",
        descripcionCorta: "Felino salvaje de China adaptado a zonas frías y áridas.",
        informacion: "El gato chino del desierto, gato montés chino o gato de Biet (Felis bieti) es una especie de mamífero carnívoro de la familia Felidae",
        edadProm: 10
      },
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Pentalagus_furnessi_387708672.jpg/250px-Pentalagus_furnessi_387708672.jpg",
        nombre: "Pentalagus furnessie",
        alt: "Conejo de Amami",
        descripcionCorta: "Conejo primitivo de Japón con orejas cortas y hábitos nocturnos.",
        informacion: `El conejo de Amami, de Ryukyu o de orejas cortas (Pentalagus furnessi) es una especie de mamífero lagomorfo de la familia Leporidae`,
        edadProm: 10
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Romerolagus_diazi_-_Zoologico_de_Chapultepec%2C_Ciudad_de_M%C3%A9xico_-_Cropped.jpg/330px-Romerolagus_diazi_-_Zoologico_de_Chapultepec%2C_Ciudad_de_M%C3%A9xico_-_Cropped.jpg",
        nombre: "Romerolagus diazi",
        alt: "Conejo de los Volcanes",
        descripcionCorta: "Pequeño conejo mexicano que habita en zonas volcánicas de alta montaña.",
        informacion: `El conejo de los volcanes (Romerolagus diazi), también conocido como teporingo, zacatuche, tepolito, tepol o burrito, es una especie de mamífero lagomorfo de la familia Leporidae`,
        edadProm: 8
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Polarhase_1_1997-08-04.jpg/250px-Polarhase_1_1997-08-04.jpg",
        nombre: "Lepus",
        alt: "Liebre",
        descripcionCorta: "Género que incluye liebres veloces con largas patas y orejas.",
        informacion: `Por lo general las liebres son animales de silueta estilizada y patas traseras muy desarrolladas para la carrera. Las orejas, generalmente largas, varían en longitud de unas especies a otras`,
        edadProm: 15
      }
    ]
  }
  tarjetaSeleccionada: any = null;

  verMasInfo(infoAnima: any) {
    this.tarjetaSeleccionada = infoAnima;
  }
}
