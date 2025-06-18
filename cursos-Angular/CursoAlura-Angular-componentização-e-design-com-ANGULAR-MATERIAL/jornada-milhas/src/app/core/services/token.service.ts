import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  // Salva o token no navegador (localStorage) quando a pessoa faz login.
  salvarToken(token: string) {
    return localStorage.setItem(KEY, token);
  }

  // Remove o token do navegador quando a pessoa faz logout.
  excluirToken() {
    localStorage.removeItem(KEY);
  }

  // Retorna o token salvo. Se não tiver nenhum token, retorna uma string vazia.
  retornarToken() {
    return localStorage.getItem(KEY) ?? '';
  }

  // Verifica se existe um token salvo.
  // O "!!" transforma o valor retornado, que atualmente é uma string, em verdadeiro (true) ou falso (false), ou apenas BOOLEANO.
  possuiToken() {
    return !!this.retornarToken();
  }
}

// Existem várias formas de guardar o token no frontend.
// Como estamos no navegador, usamos o localStorage para manter o token entre as páginas,
// mesmo se a pessoa recarregar o site.
