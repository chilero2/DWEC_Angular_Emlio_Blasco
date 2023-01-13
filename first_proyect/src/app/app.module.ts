import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contadores/contadores.module';
import { DbzModule } from './dbz/dbz.module';
import { PersonajesService } from './personajes.service';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule,
  ],
  providers: [
    PersonajesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
