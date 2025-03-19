import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent] //exportando o componente do menu aqui
})
export class MenuModule { }
