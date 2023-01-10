import { Injectable } from '@angular/core';
import {Personaje} from './dbz/Personaje'

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  personajes: Personaje[] = [
    new Personaje('Goku', 20.000),
    new Personaje('Vegueta', 10.000),
    new Personaje('Krilin', 8.000)
  ]

  constructor() { }

  getPersonajes(): Personaje[] {
    return this.personajes
  }

  agregarPersonajes(personaje: Personaje):void {
    this.personajes.push(personaje)
  }
}
