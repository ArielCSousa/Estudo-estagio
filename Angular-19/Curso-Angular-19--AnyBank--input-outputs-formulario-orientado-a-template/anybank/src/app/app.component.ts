import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { FormNovaTransacaoComponent } from './form-nova-transacao/form-nova-transacao.component';
import { TipoTransacao, Transacao } from './modelos/transacao';
import { ExtratoComponent } from './extrato/extrato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent, FormNovaTransacaoComponent, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acumulador, transacaoAtual) => {
      //
      switch (transacaoAtual.tipo) {
        //
        case TipoTransacao.DEPOSITO:
          return acumulador + transacaoAtual.valor;
        //
        case TipoTransacao.SAQUE:
          return acumulador - transacaoAtual.valor;
        //
        default:
          throw new Error('Tipo de transação não identificado');
      }
      //
    }, 0);
  });
  //
  processarTransacao(transacao: Transacao) {
    if (
      transacao.tipo === TipoTransacao.SAQUE &&
      transacao.valor > this.saldo()
    ) {
      alert('Saldo insuficiente');
      throw new Error('Saldo insuficiente');
    }
    // console.log(transacao);
    alert('transação realizada com suacesso');
    this.transacoes.update((listaAtual) => [transacao, ...listaAtual]); //dessa forma as transações mais atuais ficarão sempre no início de lista

    console.log(this.transacoes()); // precisa abrir e fechar parenteses para acessar o valor do signal, igual fazemos com input e output
  }
}
