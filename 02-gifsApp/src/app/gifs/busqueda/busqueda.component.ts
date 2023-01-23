import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsModule } from '../gifs.module';
import { GifsService } from '../service/gifs.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;
  // El simbolo ! indica que txtBuscar no es nulo 

  constructor(private gifsService:GifsService){} 


buscar() {
  const valor = this.txtBuscar.nativeElement.value
  this.gifsService.buscarGifs(valor)
  this.txtBuscar.nativeElement.value = ''
}


}
