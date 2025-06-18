import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) {
    //assim eu tenho acesso a todos os métodos desse servico PENSAMENTOSERVICE
  }

  ngOnInit(): void {
    //FAZ PARTE DO SICLO DE VIDA DO COMPONENTE, TODA A LOGICA QUE DESEJA QUE SEJA CARREGADA TODA VEZ QUE CARREGAR O COMPONENTE TEM QUE SER AQUI DENTRO DO NGONINIT
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}
