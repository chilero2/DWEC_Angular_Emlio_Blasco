import { Injectable } from '@angular/core';
import {Personaje} from './dbz/Personaje'

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  personajes: Personaje[] = []

  constructor() { }

  getPersonajes(): Personaje[] {
    return this.personajes
  }

  agregarPersonajes(personaje: Personaje):void {
    this.personajes.push(personaje)
  }
}
