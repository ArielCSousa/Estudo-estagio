import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência');

    //chamando o evento criado acima "aoTransferir" e usando "emit()" para EMITIR um valor que é opicional
    //this.aoTransferir.emit({valor: this.valor, destino: this.destino});
    //para melhor visualização da linha acima faremos assim diferente:
    const valorEmitir = {valor: this.valor, destino: this.destino};
    //dará no mesmo mas fico melhor de se visualizar
    this.aoTransferir.emit(valorEmitir);

    this.limparCampo(); //chamando a função para deixar os campos em branco após exibir para o usuário na tela

  }

  limparCampo(){
    this.valor = 0;
    this.destino = 0;
  }

}
