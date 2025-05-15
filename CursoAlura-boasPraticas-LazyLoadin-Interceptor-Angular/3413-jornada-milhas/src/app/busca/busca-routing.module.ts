import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { BuscaComponent } from './busca.component';
//

const routes: Routes = [
  {
    path: '',
    component: BuscaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // forChild é usado em módulos de funcionalidade e pode ser chamado várias vezes para adicionar rotas adicionais
  //o método forChild é usado para configurar o roteamento em módulos de funcionalidade e pode ser chamado várias vezes para diferentes módulos
  exports: [RouterModule],
})
export class BuscaRoutingModule {}
