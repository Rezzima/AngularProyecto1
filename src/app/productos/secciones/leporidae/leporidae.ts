import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';
import { Bloque } from '../../../models/bloques';

@Component({
  selector: 'app-leporidae',
  imports: [CommonModule],
  templateUrl: './leporidae.html',
  styleUrl: './leporidae.css'
})
export class Leporidae {
  public informacion: InfoAnimales[];
      public bloqueInfo: Bloque[] = [
        {
          titulo: "Pentalagus furnessie",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MXqsNQtGT1mDqKRNJQxGffH2qz8jGw9wSQ&s",
          informacion: "La aparición de este género data de mediados del Mioceno, y sus características actuales son bastante parecidas a los fósiles encontrados de aquella época"
        },
        {
          titulo: "",
          img: "../../../assets/coejnosinmarca.jpeg",
          informacion: "Mide de 40 a 50 cm de largo, con una cola de una longitud media de 15 mm. Las orejas no llegan a los 50 mm, siendo pequeñas para ser un conejo"
        },
        {
          titulo: "",
          img: "https://amami-horizon.com/uploads/sites/2/2021/09/parenting-of-pentalagus-furnessi_01.jpg",
          informacion: "Su peso oscila entre los 2 y 3 kg. Su pelo es uniforme y densamente poblado, de color marrón oscuro en el dorso, más rojizo por los costados y algo más claro por el vientre"
        },
        {
          titulo: "Romerolagus diazi",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVojycIFx2qfdZ57Xe4YiUV-OL_w_tRImtQ&s",
          informacion: "Es endémico de las montañas del centro de México. Vive en bosques y zacatonales por arriba de los 2800 m. Está en Peligro de Extinción debido principalmente a la pérdida de hábitat y fragmentación"
        },
        {
          titulo: "",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeKnUoeuHACx7ODW7uif1wsrAizqrRSDS8g&s",
          informacion: "Mide alrededor de 30 cm de largo, cola vestigial de unos 20 o 30 mm y orejas de 40 mm, pequeñas en comparación con otros conejos. Su peso medio es de 600 g. Su pelo, corto y uniforme, es de color amarillo y negro, salvo en la superficie dorsal de las patas y algunas zonas de la cara, que son de color ocre, y un triángulo de pelo rubio en la nuca."
        },
        {
          titulo: "",
          img: "https://zoogalaxy.net/assets/images/mammalia/lagomorpha/romerolagus-diazi/romerolagus-diazi_02_zoogalaxy.jpg",
          informacion: "Si bien es posible encontrarlos activos en el día o la noche, sus horas de máxima actividad se dan por las mañanas y bien entrada la tarde. Es probable que entre las 10 y las 14 horas estén fuera de sus refugios"
        },
        {
          titulo: "Lepus",
          img: "https://www.shutterstock.com/image-photo/starcks-hare-lepus-starcki-bale-260nw-2233567431.jpg",
          informacion: "La longitud y el color del pelo varían en cada especie, pero siempre tienen como objetivo el camuflaje. La liebre ártica o liebre polar (Lepus arcticus) varía su color cada año, de pardo en primavera y verano, a gris en otoño y blanco en invierno"
        },
        {
          titulo: "",
          img: "https://pictureanimal.com/wiki-image/1080/152637038888222721.jpeg",
          informacion: "Las liebres son solitarias, aunque no les importa en absoluto la presencia de otras liebres en los alrededores. Tan solo se producen peleas durante la época de celo (variable según especies), que pueden llegar a ser hasta cierto punto cómicas en algunas especies"
        },
        {
          titulo: "",
          img: "../../../assets/lepido.jpeg",
          informacion: "Lo que todas las liebres tienen en común es el hecho de parir crías muy precoces y ser especies muy prolíficas. Nacen entre tres y ocho crías en cada parto, y cada hembra pare de ordinario más de cuatro camadas al año"
        }
      ]

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

