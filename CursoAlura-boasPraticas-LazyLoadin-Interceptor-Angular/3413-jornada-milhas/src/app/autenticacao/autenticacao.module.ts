import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../core/material/material.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';

@NgModule({
  declarations: [CadastroComponent, LoginComponent, PerfilComponent],
  imports: [
    AutenticacaoRoutingModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [CadastroComponent, LoginComponent, PerfilComponent],
})
export class AutenticacaoModule {}
