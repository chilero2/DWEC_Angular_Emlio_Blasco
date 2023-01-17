import { Component } from '@angular/core';
import { Villano } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../Personaje';

@Component({
  selector: 'app-villainous',
  templateUrl: './villainous.component.html',
  styleUrls: ['./villainous.component.scss'],
})
export class VillainousComponent {
  constructor() {}
}
