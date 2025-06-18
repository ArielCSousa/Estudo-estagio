import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';

@Component({
  selector: 'app-filtros-complementares',
  templateUrl: './filtros-complementares.component.html',
  styleUrls: ['./filtros-complementares.component.scss'],
})
export class FiltrosComplementaresComponent {
  //
  @Output() realizarBusca = new EventEmitter();

  constructor(
    public formBuscaService: FormBuscaService,
    private passagensService: PassagensService
  ) {}

  busca() {
    //validando se o formulário está válido
    if (!this.formBuscaService.formEstaValido) {
      //
      // entro no formulário e marco todos os campos como TOUCHED,
      // para marcar todos os campos que são obrigatórios alertando que precisam ser preenchidos
      this.formBuscaService.formBusca.markAllAsTouched();
      //
      //scrollar a tela inteira para o topo
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      return;
    }
    this.realizarBusca.emit(this.formBuscaService.obterDadosBusca());
  }

  limparFiltros() {
    this.formBuscaService.formBusca.patchValue({
      conexoes: null,
      companhias: null,
      precoMin: this.passagensService.precoMin,
      precoMax: this.passagensService.precoMax,
    });
  }
}
