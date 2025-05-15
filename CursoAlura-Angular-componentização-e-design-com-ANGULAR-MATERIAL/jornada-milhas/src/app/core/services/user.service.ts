import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import { PessoaUsuaria } from '../types/type';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Criamos um "BehaviorSubject", que é como uma caixinha onde guardamos os dados da pessoa usuária.
  // Ele começa com o valor null, porque no início não sabemos se a pessoa está logada.
  private userSubject = new BehaviorSubject<PessoaUsuaria | null>(null);

  constructor(private TokenService: TokenService) {
    // Se já existir um token salvo, tentamos pegar os dados da pessoa que está logada.
    if (this.TokenService.possuiToken()) {
      this.decodificarJWT();
    }
  }

  // Função para decodificar o token e obter os dados da pessoa usuária.
  // Esses dados são guardados dentro do BehaviorSubject.
  decodificarJWT() {
    const token = this.TokenService.retornarToken();
    const user = jwtDecode(token) as PessoaUsuaria;
    this.userSubject.next(user);
  }

  // Retorna os dados da pessoa usuária como um Observable,
  // ou seja, qualquer parte do sistema que "escutar" isso vai receber atualizações quando os dados mudarem.
  retornarUser() {
    return this.userSubject.asObservable();
  }

  // Salva o token no navegador e decodifica ele para obter os dados da pessoa usuária.
  salvarToken(token: string) {
    this.TokenService.salvarToken(token);
    this.decodificarJWT();
  }

  // Apaga o token do navegador e avisa que agora ninguém está logado (valor null).
  logout() {
    this.TokenService.excluirToken();
    this.userSubject.next(null);
  }

  // Verifica se o token existe no navegador. Se sim, quer dizer que alguém está logado.
  estaLogado() {
    return this.TokenService.possuiToken();
  }
}
