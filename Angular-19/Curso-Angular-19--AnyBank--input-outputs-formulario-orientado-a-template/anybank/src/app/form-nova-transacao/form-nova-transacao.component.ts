import { Component, input, output, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../modelos/transacao';
import { CommonModule, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-nova-transacao',
  standalone: true,
  imports: [FormsModule, KeyValuePipe, CommonModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css',
})
export class FormNovaTransacaoComponent {
  tipoTransacao = '';
  valorTransacao = '';

  transacaoCriada = output<Transacao>(); //preciso tipar se não dá erro ao emitir

  tipoTransacaoEnum = TipoTransacao;

  aoSubmeter() {
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
    );

    this.transacaoCriada.emit(transacao);

    this.tipoTransacao = '';
    this.valorTransacao = '';
  }
}
