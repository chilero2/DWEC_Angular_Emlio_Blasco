import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent {

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
