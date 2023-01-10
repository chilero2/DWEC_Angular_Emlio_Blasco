import { Component } from '@angular/core';
import { PersonajesService } from '../../../personajes.service';
import { Personaje } from '../../Personaje';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  
  
  constructor(private personajesService: PersonajesService) {}
  
  personajes:Personaje[] = this.personajesService.getPersonajes()

}
