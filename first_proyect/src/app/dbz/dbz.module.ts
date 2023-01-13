import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { TableComponent } from './main-page/tableComponent/table.component';
import { ListComponent } from './main-page/listComponent/list.component';
import { FormComponent } from './main-page/formComponent/form.component';
import { FormsModule } from '@angular/forms';
import { VillainousComponent } from './villainous/villainous.component';
import { ListVillainousComponent } from './villainous/list-villainous/list-villainous.component';
import { AgragarVillainousComponent } from './villainous/agragar-villainous/agragar-villainous.component';




@NgModule({
  declarations: [
    MainPageComponent,
    TableComponent,
    ListComponent,
    FormComponent,
    VillainousComponent,
    ListVillainousComponent,
    AgragarVillainousComponent,
  ],
  exports: [
MainPageComponent,
VillainousComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
