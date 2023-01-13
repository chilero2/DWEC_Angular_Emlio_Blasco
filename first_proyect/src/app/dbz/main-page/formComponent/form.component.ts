import { Component, EventEmitter, Output } from '@angular/core';
import { PersonajesService } from '../../../personajes.service';
import { Personaje } from '../../Personaje';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../app.component.scss','./form.component.scss']
})
export class FormComponent {

    nombre: string = ''
    poder: number = 0

  constructor(private personajesService: PersonajesService) {}
  
  

agregar() {
  if (this.nombre.trim().length !== 0) {
    const nuevoPersonaje = new Personaje(this.nombre, this.poder)
    this.personajesService.agregarPersonajes(nuevoPersonaje)
    this.nombre = ''
    this.poder = 0
  } else {
    alert('No has introducido nigún nombre')
  }
}
}
