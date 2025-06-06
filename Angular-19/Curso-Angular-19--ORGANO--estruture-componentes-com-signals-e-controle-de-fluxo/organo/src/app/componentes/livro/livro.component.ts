import { Component, input } from '@angular/core';
import { Livro } from './livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  //
  //assim criamos uma propriedade de entrada para que o componente recebe informações de fora
  // agora a propriedade livro retorna como uma >função do tipo input SIGNAL, por isso precisamos do () no final
  livro = input.required<Livro>();

  //
  alternarFavorito() {
    //como livro retorna uma função precisamos passar ela com () aqui e no DOM
    this.livro().favorito = !this.livro().favorito;
    //como favorito é BOOLEAN, ao clicar no icone de coração eu chamo essa função para inverter o valor atual, ou seja, se tiver true, mude para false, fazendo isso NEGANDO ELA MESMA
  }
}

/*
4. Quando usar?

4.1. @Input
Indicado para projetos legados ou versões do Angular anteriores à 16;
Adequado para aplicações que não exigem otimizações avançadas ou que já utilizam a abordagem baseada em zone.js.

4.2. inputSignal
Recomendado para novos projetos;
Ideal para quem busca uma aplicação mais performática e quer adotar a abordagem reativa oferecida por signals;
Permite maior controle sobre as atualizações de estado, especialmente em projetos complexos e de larga escala.

A recomendação geral da equipe Angular é que projetos novos adotem input baseado em signals para aproveitar os benefícios de performance e reatividade, enquanto o @Input ainda é suportado para manutenção de projetos existentes.
*/
