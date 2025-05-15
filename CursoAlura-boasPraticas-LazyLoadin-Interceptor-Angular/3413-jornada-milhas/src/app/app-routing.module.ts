import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./autenticacao/autenticacao.module').then(
        (m) => m.AutenticacaoModule
      ),
  }, //como eu indormei o "lazy load" desse módulo, eu posso tirar a declaraçao dele dos imports do APP.MODULE
  {
    path: 'busca',
    loadChildren: () =>
      import('./busca/busca.module').then((m) => m.BuscaModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/pagina-nao-encontrada',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
//pathMatch full: ele vai verificar a URL COMPLETA e REDIRECIONARÁ para a HOME >>SOMENTE<< se a URL for EXATAMENTE localhost:4200(pois passamos o path '' vazio)

//SE FOR PREFIX: ele não verificará a URL completa, ou seja, na primeira URL que coincidir com localhost:4200 o roteador vai presumir que é uma rota(path) vazia, pois não verificará o restante da URL para confirmar a informação

//======= !!!! BOA PRATICA !!!! ===================
/*
 é uma boa prática deixar as rotas mais específicas primeiro,
 e as rotas mais genéricas no final. Sendo assim,
 deixaremos o path vazio mais abaixo, antes da rota coringa.
*/
