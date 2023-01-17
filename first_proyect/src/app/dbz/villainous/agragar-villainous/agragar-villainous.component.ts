import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Villano } from '../../interfaces/dbz.interfaces';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-agragar-villainous',
  templateUrl: './agragar-villainous.component.html',
  styleUrls: [
    '../../../app.component.scss',
    './agragar-villainous.component.scss',
  ],
})
export class AgragarVillainousComponent {
  nuevo: Villano = {
    nombre: '',
    poder: 0,
  };

  constructor(private dbService: DbzService){}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) alert('No has introducido ningún villano')
    this.dbService.agregarVillano(this.nuevo)
    this.nuevo = {
      nombre: '',
    poder: 0,
    }
  }

  // @Output() OnNuevoVillano: EventEmitter<Villano> = new EventEmitter();

  // agregar() {
  //   if (this.nuevo.nombre.trim().length !== 0) {
  //     this.OnNuevoVillano.emit(this.nuevo);
  //     this.nuevo = {
  //       nombre: '',
  //       poder: 0,
  //     };
  //   } else {
  //     alert('No has introducido nigún nombre');
  //   }
  // }

}
