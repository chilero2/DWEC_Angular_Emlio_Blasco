import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { registerLocaleData } from '@angular/common';
import localeFR from '@angular/common/locales/fr'
import localeES from '@angular/common/locales/es'
import localeCAT from '@angular/common/locales/ca-ES-valencia'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';


registerLocaleData(localeFR)
registerLocaleData(localeES)
registerLocaleData(localeCAT)



@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,  
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule,
    RippleModule
  ],
  providers: [
    // Cambiar idioma por defecto
    // {provide: LOCALE_ID, useValue: 'ca-ES-valencia'}

],
  bootstrap: [AppComponent]
})
export class AppModule { }
