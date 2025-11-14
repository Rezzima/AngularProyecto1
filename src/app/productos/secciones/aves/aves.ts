import { Component } from '@angular/core';
import { InfoAnimales } from '../../../models/info-animales';
import { CommonModule } from '@angular/common';
import { Bloque } from '../../../models/bloques';

@Component({
  selector: 'app-aves',
  imports: [CommonModule],
  templateUrl: './aves.html',
  styleUrl: './aves.css'
})
export class Aves {
  public informacion: InfoAnimales[];
  public bloqueInfo: Bloque[] = [
    {
      titulo: "Scolopacidae",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Least_Sandpiper_Don_Edwards_WR_1.jpg/250px-Least_Sandpiper_Don_Edwards_WR_1.jpg",
      informacion: ` Los correlimos muestran una considerable variedad de tamaños y apariencia
        la amplia gama de formas corporales refleja una amplia gama de nichos ecológicos`
    },
    {
      titulo: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Waders_in_flight_Roebuck_Bay.jpg/250px-Waders_in_flight_Roebuck_Bay.jpg",
      informacion: `Los correlimos tienen una distribución cosmopolita, y aparecen en la mayor parte de las superficies terrestres
        del mundo, excepto en la Antártida y en los desiertos más secos`
    },
    {
      titulo: "",
      img: "https://www.shutterstock.com/image-photo/common-turnstone-rufous-arenaria-interpres-260nw-2658529071.jpg",
      informacion: ` A grandes rasgos, existen cuatro estilos de alimentación empleados por los correlimos, aunque muchas especies
        son flexibles y pueden utilizar más de un estilo. El primero es el picoteo con sondeo ocasional, que suelen
        realizar las especies de hábitats más secos que no tienen suelos blandos o barro. El segundo método, y el más
        frecuente, es el sondeo de suelos blandos, lodos y arenas en busca de presas. El tercero, utilizado por las
        "Tringas", consiste en correr en aguas poco profundas con el pico bajo el agua persiguiendo a los peces`
    },
    {
      titulo: "Musophagidae",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Corythaixoides_leucogaster1.jpg/250px-Corythaixoides_leucogaster1.jpg",
      informacion: "Los musofágidos (Musophagidae) son una familia de aves, la única del orden Musophagiformes, conocidos vulgarmente como turacos."
    },
    {
      titulo: "",
      informacion: `Todos los turacos son aves de cuerpo rígido y patas delgadas, alas semirredondeadas, y una cabeza provista de un
        pico pequeño y ganchudo, apto para la ingestión de frutas, hojas y pequeños animales`,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLH19znFWULmL4iJvOXyqTefd8WJyVZEKhsg&s"
    },
    {
      titulo: "",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZeSBakfTzT1tn6nN9p2TK92r3TWICdUn9jg&s",
      informacion: `A grandes rasgos, existen cuatro estilos de alimentación empleados por los correlimos, aunque muchas especies
        son flexibles y pueden utilizar más de un estilo. El primero es el picoteo con sondeo ocasional, que suelen
        realizar las especies de hábitats más secos que no tienen suelos blandos o barro. El segundo método, y el más
        frecuente, es el sondeo de suelos blandos, lodos y arenas en busca de presas. El tercero, utilizado por las
        "Tringas", consiste en correr en aguas poco profundas con el pico bajo el agua persiguiendo a los peces`
    },
    {
      titulo: "Otídidos",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Drop_f%C3%BAzat%C3%BD_%28Otis_tarda%29_%282416576086%29.jpg/250px-Drop_f%C3%BAzat%C3%BD_%28Otis_tarda%29_%282416576086%29.jpg",
      informacion: "Todos los otídidos son aves altas y bastante grandes. Las dos especies más grandes: la avutarda kori (Ardeotis kori) y la avutarda común (Otis tarda) son las aves voladoras más pesadas del mundo"
    },
    {
      titulo: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Gackeltrappe_anagoria.jpg/250px-Gackeltrappe_anagoria.jpg",
      informacion: "En la mayoría de las especies los machos son sustancialmente más grandes que las hembras, con frecuencia un 30% más largos y en algunos casos con un peso de más del doble"
    },
    {
      titulo: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Buff-crested_Bustard_-_Samburu_-_Kenya_NH8O7000_%2815556869635%29.jpg/250px-Buff-crested_Bustard_-_Samburu_-_Kenya_NH8O7000_%2815556869635%29.jpg",
      informacion: "Las avutardas son omnívoras y anidan en la tierra. Caminan erguidas sobre sus fuertes patas y grandes dedos. Tienen las alas anchas y largas, con patrones de plumaje llamativos en vuelo"
    }
  ]

  constructor() {
    this.informacion = [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Tringa_brevipes.jpg/250px-Tringa_brevipes.jpg",
        nombre: "Scolopacidae",
        alt: "Correlimo",
        informacion: `Los escolopácidos (Scolopacidae) son una familia de aves caradriformes. Es una familia grande y diversa de pequeñas y medianas aves costeras`,
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
