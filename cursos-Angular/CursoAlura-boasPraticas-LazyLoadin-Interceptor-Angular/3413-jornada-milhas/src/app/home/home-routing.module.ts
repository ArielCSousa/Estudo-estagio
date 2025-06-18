import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // forChild é usado em módulos de funcionalidade e pode ser chamado várias vezes para adicionar rotas adicionais
  //o método forChild é usado para configurar o roteamento em módulos de funcionalidade e pode ser chamado várias vezes para diferentes módulos
  exports: [RouterModule],
})
export class HomeRoutingModule {}
