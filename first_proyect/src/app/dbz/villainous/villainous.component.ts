import { Component } from '@angular/core';
import { Villano } from '../interfaces/dbz.interfaces';

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
}
