import { Component, EventEmitter, Output } from '@angular/core';
import { PersonajesService } from '../../../personajes.service';
import { Personaje } from '../../Personaje';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

    nombre: string = ''
    poder: number = 0

  constructor(private personajesService: PersonajesService) {}
  
  

agregar() {
  if (this.nombre.trim().length !== 0) {
    const nuevoPersonaje = new Personaje(this.nombre, this.poder)
    this.personajesService.agregarPersonajes(nuevoPersonaje)
    console.log(this.personajesService.getPersonajes())
  }


}
}
