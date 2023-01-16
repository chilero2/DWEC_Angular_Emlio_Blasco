import { Component } from '@angular/core';
import { Villano } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-villainous',
  templateUrl: './villainous.component.html',
  styleUrls: ['./villainous.component.scss'],
})
export class VillainousComponent {
  villanos: Villano[] = [
    { nombre: 'célula', poder: 30 },
    { nombre: 'freezer', poder: 25 },
  ];

  agregarNuevoVillano(argumento: Villano) {
    this.villanos.push(argumento);
  }

  constructor(private DbzService: DbzService) {}
}
