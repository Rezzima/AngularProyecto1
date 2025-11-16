import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAnimales } from '../../../models/info-animales';
import { Bloque } from '../../../models/bloques';

@Component({
  selector: 'app-roedores',
  imports: [CommonModule],
  templateUrl: './roedores.html',
  styleUrl: './roedores.css'
})
export class Roedores {
  public informacion: InfoAnimales[];
  public bloqueInfo: Bloque[] = [
        {
          titulo: "Abrocomidae",
          img: "../../../assets/guarene_chinchilla.jpg",
          informacion: "Son animales sociales que cavan túneles, y viven en la Cordillera de los Andes de América del Sur. Son probablemente herbívoros, sin embargo esto no está claro"
        },
        {
          titulo: "",
          img: "../../../assets/guarene_chinchilla_dos.jpg",
          informacion: "Pueden ser descritos como de tamaño mediano. Pelosparaos se proyectan detrás de los tres dígitos de las patas traseras"
        },
        {
          titulo: "",
          img: "../../../assets/guarene_chinchilla_tres.jpg",
          informacion: "Sus grandes cráneos se angostan en sus caras. Algunos trabajos moleculares, sugieren que a pesar de su apariencia están más cercanos a los octodontoides como los degus, nutria, y tuco-tucos que a las chinchillas y vizcachas"
        },
        {
          titulo: "Cuniculus",
          img: "../../../assets/paca.jpg",
          informacion: "El nombre correcto del género ha sido motivo de debate durante años; finalmente, la Comisión Internacional de Nomenclatura Zoológica resolvió que Cuniculus tiene prioridad sobre Agouti y por ello es el nombre que debe usarse"
        },
        {
          titulo: "",
          img: "../../../assets/paca_paya.jpg",
          informacion: "Vive en las proximidades de los cursos de agua de los bosques tropicales, desde el sur de México y Centroamérica, pasando por Paraguay y el noreste de Argentina"
        },
        {
          titulo: "",
          img: "../../../assets/paca_paca.jpg",
          informacion: "Está incluido en la Lista de Preocupación Menor dada su amplia distribución, presunta gran población, la aparición de una serie de áreas protegidas, y porque es poco probable que su población disminuya a casi la velocidad que obligue a calificar para su inclusión en una categoría de amenaza"
        },
        {
          titulo: "Dasyprocta azarae",
          img: "../../../assets/mango_bicho.jpg",
          informacion: "El agutí de Azara es uno de los miembros más pequeños del género Dasyprocta, pesa entre 2,4 a 3,4 kg. Color dorsal gris lavado con amarillo rojizo opaco u oliváceo a naranja brillante"
        },
        {
          titulo: "",
          img: "../../../assets/mango_bicho_dos.jpg",
          informacion: "Los jóvenes tienen el mismo patrón de coloración que los adultos, pero con pelos más cortos. Los animales de regiones más secas, particularmente en Argentina, Paraguay, Uruguay y el suroeste de Brasil, tienden a ser en su mayoría grises u oliváceas"
        },
        {
          titulo: "",
          img: "../../../assets/mango_bicho_tres.jpg",
          informacion: "Dasyprocta azarae se distingue fácilmente de otras especies por su color amarillo oliváceo homogéneo junto con los cuartos traseros grisáceos a negruzcos"
        }
      ]

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
