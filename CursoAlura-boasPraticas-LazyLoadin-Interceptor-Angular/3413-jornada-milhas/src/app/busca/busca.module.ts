import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//
import { SharedModule } from '../shared/shared.module';
import { BuscaComponent } from './busca.component';
import { CompanhiasComponent } from './companhias/companhias.component';
import { FiltrosComplementaresComponent } from './filtros-complementares/filtros-complementares.component';
import { LabelComponent } from './label/label.component';
import { ParadasComponent } from './paradas/paradas.component';
import { PassagemComponent } from './passagem/passagem.component';
import { PassagemDestaqueComponent } from './passagem-destaque/passagem-destaque.component';
import { PrecosComponent } from './precos/precos.component';
import { MaterialModule } from '../core/material/material.module';
import { BuscaRoutingModule } from './busca-routing.module';

@NgModule({
  declarations: [
    BuscaComponent,
    ParadasComponent,
    CompanhiasComponent,
    PrecosComponent,
    LabelComponent,
    FiltrosComplementaresComponent,
    PassagemComponent,
    PassagemDestaqueComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    BuscaRoutingModule,
  ],
  exports: [
    BuscaComponent,
    ParadasComponent,
    CompanhiasComponent,
    PrecosComponent,
    LabelComponent,
    FiltrosComplementaresComponent,
    PassagemComponent,
    PassagemDestaqueComponent,
  ],
})
export class BuscaModule {}
