import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';
import { Bloque } from '../../../models/bloques';

@Component({
  selector: 'app-equidos',
  imports: [CommonModule],
  templateUrl: './equidos.html',
  styleUrl: './equidos.css'
})
export class Equidos {
  public informacion: InfoAnimales[];
   public bloqueInfo: Bloque[] = [
    {
      titulo: "Equus ferus caballus",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Hairz.jpg/330px-Hairz.jpg",
      informacion: "A la hembra del caballo se le llama yegua y a las crías, si son machos, potros o potrillos, y si son hembras, potras o potrancas"
    },
    {
      titulo: "",
      img: "https://inaturalist-open-data.s3.amazonaws.com/photos/13235280/original.jpg",
      informacion: "El término latino utilizado para denominar al caballo era equus, mientras caballus, que derivó en la palabra «caballo», es un término del latín tardío, posiblemente de origen celta, que significa «caballo castrado»"
    },
    {
      titulo: "",
      img: "https://i.pinimg.com/736x/da/a8/6d/daa86deacdca9042b9ea921acb76cfe4.jpg",
      informacion: "Linneo clasificó los caballos domésticos en 1758 en la especie Equus caballus. Al demostrarse que los caballos domésticos actuales y su antepasado silvestre extinto, clasificado como Equus ferus (caballo salvaje), pertenecían a una misma especie, debía asignársele un único nombre científico"
    },
    {
      titulo: "Equus africanus",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQ9cGgp5tBLpzoIQ30aZiN0d5QeU9J3gIwQ&s",
      informacion: "El primer nombre científico que se publicó para los asnos salvajes africanos fue Asinus africanus, por Fitzinger en 1858, pero se considera un nomen nudum (no valido)"
    },
    {
      titulo: "",
      img: "../../../assets/seloquehiciste.png",
      informacion: "Desde un principio los burros domésticos y los asnos salvajes africanos fueron clasificados como especies diferentes, Equus asinus y Equus africanus respectivamente durante mucho tiempo. Al demostrarse que los asnos domésticos y los salvajes africanos, pertenecían a una misma especie debía asignársele un único nombre científico"
    },
    {
      titulo: "",
      img: "https://cdn.pixabay.com/photo/2014/06/14/19/31/donkey-368988_1280.jpg",
      informacion: "Los asnos se clasifican dentro del orden de los perisodáctilos, perteneciendo a la familia de los équidos y a su único género superviviente, Equus al que también pertenecen el caballo (Equus ferus caballus), el onagro o kulán (Equus hemionus), el kiang (Equus kiang) y las cebras"
    },
    {
      titulo: "Cebra",
      img: "https://wallpapers.com/images/hd/zebra-pictures-y703q3fbii2nopj6.jpg",
      informacion: "Etimológicamente, la palabra cebra que utilizan los hablantes de español deriva del nombre del 'zevro/a' o 'cebro/a', un équido salvaje que habitó la península ibérica por lo menos hasta bastante avanzada la Edad Media"
    },
    {
      titulo: "",
      img: "https://cdn.pixabay.com/photo/2020/03/10/04/48/animal-4917802_1280.jpg",
      informacion: "El género Equus surgió en Norteamérica durante el Plioceno. Hace 4,5 millones de años dicho género se dividió en dos linajes, el caballino (del que proceden los actuales caballos) y el estenoniano (del que proceden asnos y cebras)"
    },
    {
      titulo: "",
      img: "https://media.istockphoto.com/id/1484751718/es/foto/una-cebra-de-monta%C3%B1a-del-cabo-en-h%C3%A1bitat-natural-parque-nacional-de-la-cebra-de-monta%C3%B1a.jpg?s=612x612&w=0&k=20&c=OZg47if192HzD17aZ2ESetb4MNx7uH6hWZgtqVjiveo=",
      informacion: "No está aún clara la relación filogenética entre las distintas especies de cebras. Estudios del ADN mitocondrial muestran un mayor parentesco entre la cebra de Grevy y la cebra común, mientras que la cebra de montaña estaría más relacionada genéticamente con el asno africano"
    }
  ]

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
