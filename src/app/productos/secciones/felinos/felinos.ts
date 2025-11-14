import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';
import { Bloque } from '../../../models/bloques';

@Component({
  selector: 'app-felinos',
  imports: [CommonModule],
  templateUrl: './felinos.html',
  styleUrl: './felinos.css'
})
export class Felinos {
  public informacion: InfoAnimales[];
    public bloqueInfo: Bloque[] = [
      {
        titulo: "Caracal caracal",
        img: "https://media.istockphoto.com/id/166281634/es/foto/caracal-pasos-sud%C3%A1frica.jpg?s=612x612&w=0&k=20&c=-DVnyOrbF79-N7TdiesTMFdsx1yygvBCreSg5iPO5jo=",
        informacion: "Al caracal se lo llama en ocasiones «lince africano», pero no está estrechamente emparentado con los linces"
      },
      {
        titulo: "",
        img: "https://media.istockphoto.com/id/472193905/es/foto/caracal-pasos-de-%C3%A1rbol-de-%C3%A1frica-del-sur.jpg?s=612x612&w=0&k=20&c=cYawX0vNY3JNx7SnEL7UYFtNuzl89udzvppSAztybTs=",
        informacion: "Al igual que los linces y el serval, el caracal posee una aguda vista y oído muy afinado debido a sus largas orejas puntiagudas, rematadas por penachos de pelo negro (el propio nombre 'caracal' proviene de la palabra turca karakulak, fue propuesta por Buffon en 1761 y significa 'orejas negras'"
      },
      {
        titulo: "",
        img: "https://mf.b37mrtl.ru/rbthmedia/images/2021.06/original/60c5350115e9f9152b1c4529.jpg",
        informacion: "Caza y se alimenta de pequeños mamíferos, como liebres, roedores, damanes e incluso crías de antílope, pero sus presas preferidas con diferencia son las aves"
      },
      {
        titulo: "Catopuma badia",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0075f-mx0ToxQ8HEVnWADerjYM97rIyPzw&s",
        informacion: "Mide unos 60 cm, más una cola de 40 cm, y su peso varía entre 2 y 3 kg. El gato de Borneo es un animal nocturno que se alimenta de pequeños mamíferos y aves"
      },
      {
        titulo: "",
        img: "https://i.pinimg.com/474x/58/2a/a9/582aa95e610f0985671dedc3495143c0.jpg",
        informacion: "La piel del gato de Borneo usualmente es terracota (rojizo-pardo), pero tiene una gama de colores de variantes del gris. El análisis de ADN lo relaciona con el gato dorado asiático, diferenciándose en la estructura ósea y que es mucho más pequeño"
      },
      {
        titulo: "",
        img: "https://live.staticflickr.com/863/26905320997_99f86e7062_z.jpg",
        informacion: "Este gato salvaje caza de noche aves y roedores, y algunas veces hasta monos"
      },
      {
        titulo: "Felis Bieti",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyn-0fZnBwO58lGlgb14WJl90TrSOuF2I8_g&s",
        informacion: "Se trata de un animal notablemente similar al gato montés europeo (Felis silvestris silvestris), con el que comparte tamaño (80 cm de largo, más 35 de cola) y área de distribución"
      },
      {
        titulo: "",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Chinese_Mountain_Cat_%28Felis_Bieti%29_in_XiNing_Wild_Zoo_croped.jpg/250px-Chinese_Mountain_Cat_%28Felis_Bieti%29_in_XiNing_Wild_Zoo_croped.jpg",
        informacion: "El pelaje es bastante largo y de color arena en todo el cuerpo, tornándose blanquecino en el vientre. Sobre esta capa de fondo se superponen anillos de color oscuro en patas y cola, una franja oscura a lo largo del lomo, y rayas verticales más pálidas en el cuerpo, que son difíciles de ver de lejos"
      },
      {
        titulo: "",
        img: "https://www.shutterstock.com/image-photo/extremely-rare-chinese-desert-catfelis-260nw-600933281.jpg",
        informacion: "El hábitat característico lo componen áreas secas pobladas de matorral y árboles dispersos, pero nunca auténticos desiertos. Estos animales son fundamentalmente nocturnos y se alimentan de roedores, pikas y aves pequeñas"
      }
    ]

  constructor() {
    this.informacion = [
      {
        id: 1,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Caracal_on_the_road%2C_early_morning_in_Kgalagadi_%2836173878220%29.jpg/330px-Caracal_on_the_road%2C_early_morning_in_Kgalagadi_%2836173878220%29.jpg",
        nombre: "Caracal caracal",
        alt: "Caracal",
        informacion: `El caracal (Caracal caracal) es una especie de mamífero carnívoro del género Caracal, de la familia Felidae. Es un felino de tamaño medio`,
        edadProm: 16
      },
      {
        id: 2,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bay_cat_1_Jim_Sanderson-cropped.jpg/250px-Bay_cat_1_Jim_Sanderson-cropped.jpg",
        nombre: "Catopuma badia",
        alt: "Gato de Borneo",
        informacion: "El gato de Borneo (Catopuma badia), conocido también como gato de la bahía o gato rojo de Borneo, es un felino endémico de la isla de Borneo",
        edadProm: 14
      },
      {
        id: 3,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Chinese_Mountain_Cat_%28Felis_Bieti%29_in_XiNing_Wild_Zoo.jpg/250px-Chinese_Mountain_Cat_%28Felis_Bieti%29_in_XiNing_Wild_Zoo.jpg",
        nombre: "Felis bieti",
        alt: "Gato chino del desierto",
        informacion: "El gato chino del desierto, gato montés chino o gato de Biet (Felis bieti) es una especie de mamífero carnívoro de la familia Felidae",
        edadProm: 10
      }
    ]
  }
  tarjetaSelect: any = null;

  verMasInfo(infoAnima: any) {
    this.tarjetaSelect = infoAnima;
  }
}
