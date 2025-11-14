import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';
import { Bloque } from '../../../models/bloques';

@Component({
  selector: 'app-caninos',
  imports: [CommonModule],
  templateUrl: './caninos.html',
  styleUrl: './caninos.css'
})
export class Caninos {
  public informacion: InfoAnimales[];
  public bloqueInfo: Bloque[] = [
    {
      titulo: "Canis Lupaster",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8j7YJbDyfnW2sDV-9XDk-GHmXkf1wjoXvA&s",
      informacion: "La especie es nativa del norte y noreste de África, donde se distribuye desde Marruecos a Egipto, a través de Senegal, Mali, Argelia, Libia y el norte de Nigeria."
    },
    {
      titulo: "",
      img: "https://observation.org/media/photo/6035065.jpg",
      informacion: "Es un cánido con pesos de entre 15 a 35 kg en edad adulta. Posee una dieta principalmente carnívora, variada y oportunista, predando ovejas, cabras, camellos, jabalís, liebres y mamíferos pequeños"
    },
    {
      titulo: "",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaR2kNSBLgEXuVL2vonq1tUbxwPVF5kVY23A&s",
      informacion: "Es un animal territorial; cada territorio es habitado por una pareja acompañada por la descendencia del año anterior, la que ayuda en la crianza de los cachorros más jóvenes"
    },
    {
      titulo: "Canis Aureus",
      img: "https://www.shutterstock.com/image-photo/portrait-young-european-jackal-canis-600nw-2589539997.jpg",
      informacion: " En el continente africano está presente en amplias zonas del norte y sobre todo en la región oriental. A principios de abril de 2023 se avistó por primera vez un ejemplar salvaje en territorio español en la localidad de Salvatierra, Provincia de Álava"
    },
    {
      titulo: "",
      img: "https://media.istockphoto.com/id/1142603821/es/foto/canis-aureus.jpg?s=170667a&w=0&k=20&c=GHt450c_9s_IRvbfHM_h_NVUP90sS01AClJ2xSPopZE=",
      informacion: "Tiene una alimentación muy variada: pequeños roedores, aves que anidan a ras del suelo, insectos, reptiles, carroñas y detritus próximos a los asentamientos humanos"
    },
    {
      titulo: "",
      img: "https://st2.depositphotos.com/1374600/6593/i/950/depositphotos_65937527-stock-photo-golden-jackal-canis-aureus.jpg",
      informacion: "Puede cazar en manadas o en parejas, y entonces ataca con éxito a presas relativamente grandes o sus crías como: corderos, cabras, impalas etc"
    },
    {
      titulo: "Canis Lupus",
      img: "https://www.shutterstock.com/image-photo/gray-wolf-canis-lupus-day-600nw-2365573285.jpg",
      informacion: "El primer registro fósil data de hace ochocientos mil años. Los lobos son originarios de América del Norte y Eurasia, por donde antaño se distribuían y eran abundantes"
    },
    {
      titulo: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/db/Canis-lupus.jpg",
      informacion: "Aunque todavía hay un número aceptable de lobos en la parte continental de los Estados Unidos de América y en algunas otras regiones, la especie está listada como en peligro o amenazada"
    },
    {
      titulo: "",
      img: "https://media.istockphoto.com/id/1768770944/es/foto/lobo-com%C3%BAn.jpg?s=612x612&w=0&k=20&c=guVZXLiguw6IVT6VdqcM1pj9d0AF-aPyfQIwKJYfn5E=",
      informacion: "Se habla de un 'lobo de mar' para referirse a un marinero experimentado mientras que, cuando se dice que un grupo de personas son 'lobos de una camada' , lo que significa en realidad es que comparten intereses comunes que les llevan a mantener una relación cordial"
    }
  ]

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
