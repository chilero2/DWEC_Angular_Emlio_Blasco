import { Component } from '@angular/core';



@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

  nombreLower: string = 'Toni'
  nombreUpper: string = 'TONI'
  nombreCompleto: string = 'TonI CAmaRena IvaRs'

  fecha: Date = new Date()

}
