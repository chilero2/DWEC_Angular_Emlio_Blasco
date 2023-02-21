import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss'],
})
export class NoComunesComponent {
  
  // i18nSelect
  person: any = {
    name: '',
    gender: '',
  };

  inviteMap: any = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = []

  messageMapping : {
    [k: string]: string
  } = {
    '=0' : 'no tenemos ningún cliente',
    '=1' : 'tenemos un cliente',
    'other' : 'tenemos # clientes' 
  }

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.clientes = ['Carmen', 'Emilio', 'Pablo', 'Alex', 'Guille', 'Pau']
    this.person = {
      name: 'Susana',
      gender: 'female',
    };
  }

  cambiarCliente() {
    this.person.name = this.person.name === 'Jose Luis' ? 'Susana' : 'Jose Luis'
    this.person.gender = this.person.gender === 'male' ? 'female' : 'male'
    
  }

  borrarCliente() {
    this.clientes.pop();

  }


}
