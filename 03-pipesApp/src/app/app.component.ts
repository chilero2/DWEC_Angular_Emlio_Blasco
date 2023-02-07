import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '03-pipesApp';

  nombre = 'EmiLio bLasco'
  valor = 1000
  obj = {
    nombre: "Antonio"
  }

  mostrarNombre() {
    console.log(this.nombre)
    console.log(this.valor)
    console.log(this.obj)
  }
}
