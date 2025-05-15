//BOA PRÁTICA: DEIXAR PRIMEIRO NOS IMPORTS TUDO QUE FOR DO PRÓPRIO ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { HomeComponent } from './home.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, PromocoesComponent, DepoimentosComponent],
  imports: [MaterialModule, CommonModule, SharedModule, HomeRoutingModule],
  exports: [HomeComponent, PromocoesComponent, DepoimentosComponent],
})
export class HomeModule {}
