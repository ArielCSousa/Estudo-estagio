import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };
  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {}

  criarPensamento() {
    // alert('Novo pensamento criado!');
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']); //passando a rota que eu quero que siga quando criar o pensamento
    });
  }

  cancelar() {
    // alert('Ação cancelada!');
    this.router.navigate(['/listarPensamento']);
  }
}
