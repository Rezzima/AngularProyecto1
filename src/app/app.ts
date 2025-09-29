import { Component, signal } from '@angular/core';
//import { Aside } from './componentes/aside/aside';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoNuevo');
}
