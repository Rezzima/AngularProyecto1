import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';
import { Bloque } from '../../../models/bloques';

@Component({
  selector: 'app-peces',
  imports: [CommonModule],
  templateUrl: './peces.html',
  styleUrl: './peces.css'
})
export class Peces {
  public informacion: InfoAnimales[];
  public bloqueInfo: Bloque[] = [
    {
      titulo: "Carcharhiniformes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ094e4O7d202VSNo0Cy0ejftIh-m2Urp9Oow&s",
      informacion: "Los miembros más antiguos del orden aparecieron durante el Jurásico Medio-Superior, teniendo dientes y formas corporales morfológicamente similares a las de los tiburones gato actuales"
    },
    {
      titulo: "",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Oceanic_Whitetip_Shark.png",
      informacion: "Los carcariniformes experimentaron una importante diversificación durante el Cretácico Superior, inicialmente como formas mayoritariamente pequeñas"
    },
    {
      titulo: "",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwHVOicY5lHqGeGEDl5qkIGE_8gwv1S00GBGZ0Q9Q_tHPFBPK8N9LZ09CQr7_pjmbysC7FEqvy7ik9AI-8G-uC-OfR-CjIe3cPePAwgD6CkNKfdgDBngt-MYkn7pNLsDYmRSkO__RceXx9oBctcHBh0YYVcokkvv_Mjp96tdTyOTDmDhQrO-zkhozRhA/s775/IMG_2474Bx775.jpg",
      informacion: " Se caracterizan por tener mayoritariamente dos aletas dorsales no espinadas, poseer cinco hendiduras branquiales y la ausencia de branquiespinas"
    },
    {
      titulo: "Lamniformes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTAn7QjHtVw-xcRSvWxs85WZXbANRrKncgLw&s",
      informacion: "Aunque algunos autores han argumentado que el género Palaeocarcharias del Jurásico Superior deberían considerarse un lamniformes, siendo de los géneros más antiguos conocidos, esto es dudoso"
    },
    {
      titulo: "",
      img: "https://media.istockphoto.com/id/533130811/es/foto/tibur%C3%B3n-jaquet%C3%B3n-sonrisa.jpg?s=612x612&w=0&k=20&c=KOTjjdLT-iK4za928JId_Aq8fTw8L9AP8_n3Sj1Yze8=",
      informacion: "Los lamniformes experimentaron una importante radiación adaptativa durante el Cretácico y se convirtieron en elementos prominentes de los ecosistemas oceánicos"
    },
    {
      titulo: "",
      img: "https://media.istockphoto.com/id/1438305496/es/foto/el-gran-tibur%C3%B3n-blanco-gira-por-debajo-de-la-superficie-del-oc%C3%A9ano.jpg?s=612x612&w=0&k=20&c=jP5xVp90dC1DffE7ndFFMhCac4iITZRYcro-Or1M-eY=",
      informacion: "Alcanzaron su mayor diversidad durante el Cretácico Superior, pero sufrieron un drástico declive durante la extinción del Cretácico-Paleógeno, antes de recuperarse hasta alcanzar un pico de diversidad alto, aunque menor, durante el Paleógeno"
    },
    {
      titulo: "Orectolobiformes",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Whale_shark_Georgia_aquarium.jpg/1200px-Whale_shark_Georgia_aquarium.jpg",
      informacion: " Se caracterizan por poseer dos aletas dorsales no espinadas, una boca corta confinada a estar bien delante de los ojos, fosas nasales especializadas y tener la quinta hendidura superponiéndose a la cuarta detrás del origen de la aleta pectoral"
    },
    {
      titulo: "",
      img: "https://inaturalist-open-data.s3.amazonaws.com/photos/95353637/original.jpg",
      informacion: "La mayoría de sus integrantes se alimentan en el fondo marino, en aguas poco profundas o de profundidad media, detectando y capturando moluscos, crustáceos y otros pequeños animales"
    },
    {
      titulo: "",
      img: "https://inaturalist-open-data.s3.amazonaws.com/photos/95353635/original.jpg",
      informacion: "Los tiburones alfombra (Orectolobidae) suelen ser depredadores de emboscada, permaneciendo ocultos en el fondo marino hasta que se acerca la presa. Se ha observado a uno engullendo entero un tiburón bambú"
    }
  ]

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
