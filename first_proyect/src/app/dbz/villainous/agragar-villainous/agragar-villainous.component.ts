import { Component, Input } from '@angular/core';
import { Villano } from '../../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agragar-villainous',
  templateUrl: './agragar-villainous.component.html',
  styleUrls: ['../../../app.component.scss','./agragar-villainous.component.scss'],
})
export class AgragarVillainousComponent {
  @Input() villanos: Villano[] = [];
  villano: Villano = {
    nombre: '',
    poder: 0,
  };

  agregar() {
    if (this.villano.nombre.trim().length !== 0) {
      const nuevo = (this.villano = {
        nombre: this.villano.nombre,
        poder: this.villano.poder,
      });
      this.villanos.push(nuevo);
    } else {
      alert('No has introducido nigún nombre');
    }
    this.villano = {
      nombre: '',
      poder: 0,
    };
  }
}
