import { Component, input } from '@angular/core';
import { TransacaoComponent } from './transacao/transacao.component';
import { Transacao } from '../modelos/transacao';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [TransacaoComponent, TransacaoComponent],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css',
})
export class ExtratoComponent {
  transacoes = input.required<Transacao[]>(); //aqui no componente pai de transacaoComponent nos recebemos uma lista de transacoes que vem do componente filho TransacaoComponent
}
