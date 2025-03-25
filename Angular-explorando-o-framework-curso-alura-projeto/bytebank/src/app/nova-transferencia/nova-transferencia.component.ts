import { Router } from '@angular/router';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
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

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {
    console.log('Solicitada nova transferência');

    //chamando o evento criado acima "aoTransferir" e usando "emit()" para EMITIR um valor que é opicional
    //this.aoTransferir.emit({valor: this.valor, destino: this.destino});
    //para melhor visualização da linha acima faremos assim diferente:
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    };
    //dará no mesmo mas fico melhor de se visualizar

    // this.aoTransferir.emit(valorEmitir);

    this.service.adicionar(valorEmitir).subscribe
      (resultado => {
      console.log(resultado);
      this.limparCampo(); //chamando a função para deixar os campos em branco após exibir para o usuário na tela
      this.router.navigateByUrl('extrato'); //ao clicar no botão TRANSFERIR ele redireciona a página para a página de extrato.
    },
      (error) => console.error(error)
    );
  }

  limparCampo(){
    this.valor = 0;
    this.destino = 0;
  }

}
