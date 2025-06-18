import { Component, input } from '@angular/core';
import { Transacao } from '../../modelos/transacao';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transacao',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css',
})
export class TransacaoComponent {
  transacao = input.required<Transacao>(); //enquanto o extrato que é o componente pai recebe uma lista, o componente filho que é esse TransacaoComponent recebe apenas uma transacao por vez
}
