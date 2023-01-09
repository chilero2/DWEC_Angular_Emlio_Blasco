import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  heroes: string[] = ['Thor', 'Spiderman', 'Superman', 'Hulk', 'Hulka']
  borrado: string | undefined 

  borrarHeroe() {
    this.borrado = this.heroes.pop()
  }

  get obtenerBorrado() {
    return this.borrado
  }

}
