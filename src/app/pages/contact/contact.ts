import { Component } from '@angular/core';
import { Mensaje } from '../../models/mensaje';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  private contadorId = 1;

  coleccionAnimales: Mensaje[] = []

  nuevoMensaje = new FormGroup({
    mensaje: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    nombre: new FormControl('')
  });

  enviarMensaje(): void {
    if(this.nuevoMensaje.valid){
      const nuevoMensaje: Mensaje={
        id: this.contadorId++,
        mensaje: this.nuevoMensaje.value.mensaje!,
        email: this.nuevoMensaje.value.email!,
        nombre: this.nuevoMensaje.value.nombre!
      }
      this.coleccionAnimales.push(nuevoMensaje)
      console.log(`mensaje enviado: `, nuevoMensaje);
      this.nuevoMensaje.reset()
      alert("Se ha enviado el mensaje")
    }
  }
}
