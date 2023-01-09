import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <p>La base es {{ base }}</p>

    <button (click)="operar('+')">{{ base }}</button>
    <span>{{ num }}</span>
    <button (click)="operar('-')">{{ base }}</button>
  `,
  styleUrls: ['../app.component.scss'],
})
export class ContadorComponent {
  title = 'contador app';
  base = 5;
  num = 10;

  operar(signo: string) {
    signo === '+' ? (this.num += this.base) : (this.num -= this.base);
  }
}
