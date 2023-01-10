import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { TableComponent } from './main-page/tableComponent/table.component';
import { ListComponent } from './main-page/listComponent/list.component';
import { FormComponent } from './main-page/formComponent/form.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainPageComponent,
    TableComponent,
    ListComponent,
    FormComponent,
  ],
  exports: [
MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
