import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { Component } from '@angular/core';
import { PassagensService } from 'src/app/core/services/passagens.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-precos',
  templateUrl: './precos.component.html',
  styleUrls: ['./precos.component.scss'],
})
export class PrecosComponent {
  precoMin: FormControl<number>;
  precoMax: FormControl<number>;

  constructor(
    public passagensService: PassagensService,
    private formBuscaService: FormBuscaService
  ) {
    this.precoMin = this.formBuscaService.obterControle<number>('precoMin');
    this.precoMax = this.formBuscaService.obterControle<number>('precoMax');
  }
}
