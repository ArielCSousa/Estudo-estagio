import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // forChild é usado em módulos de funcionalidade e pode ser chamado várias vezes para adicionar rotas adicionais
  //o método forChild é usado para configurar o roteamento em módulos de funcionalidade e pode ser chamado várias vezes para diferentes módulos
  exports: [RouterModule],
})
export class AutenticacaoRoutingModule {}
