//BOA PRATICA: DEIXAR PRIMEIROS OS IMPORTS DO ANGULAR
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//
import { BannerComponent } from './banner/banner.component';
import { BotaoControleComponent } from './botao-controle/botao-controle.component';
import { CardBuscaComponent } from './card-busca/card-busca.component';
import { CardDepoimentoComponent } from './card-depoimento/card-depoimento.component';
import { CardComponent } from './card/card.component';
import { ContainerComponent } from './container/container.component';
import { DropdownUfComponent } from './dropdown-uf/dropdown-uf.component';
import { FooterComponent } from './footer/footer.component';
import { FormBaseComponent } from './form-base/form-base.component';
import { FormBuscaComponent } from './form-busca/form-busca.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { SeletorPassageiroComponent } from './seletor-passageiro/seletor-passageiro.component';
import { MaterialModule } from '../core/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BannerComponent,
    BotaoControleComponent,
    CardComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    ContainerComponent,
    DropdownUfComponent,
    FooterComponent,
    FormBaseComponent,
    FormBuscaComponent,
    HeaderComponent,
    ModalComponent,
    SeletorPassageiroComponent,
  ],
  //modulos de funcionalidade como esse, não precisamos importar o BrowserModule, importamos no lugar o CommonModule.
  // Esse módulo fornecerá todos os recursos mais amplamente utilizados pelo Angular, um conjunto de diretivas, então você poderá usar o ngIf, ngFor, pipes e outros recursos.
  //A propriedade imports é usada para importar outros módulos que são necessários para o funcionamento correto do módulo atual.
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, RouterModule],
  exports: [
    BannerComponent,
    BotaoControleComponent,
    CardComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    ContainerComponent,
    DropdownUfComponent,
    FooterComponent,
    FormBaseComponent,
    FormBuscaComponent,
    HeaderComponent,
    ModalComponent,
    RouterModule,
    SeletorPassageiroComponent,
  ],
})
//AO FINAL DA CRIAÇÃO DO NOVO MÓDULO, É PRECISO IMPORTAR NOSSO SHARED MODULE NO APP MODULE
export class SharedModule {}
