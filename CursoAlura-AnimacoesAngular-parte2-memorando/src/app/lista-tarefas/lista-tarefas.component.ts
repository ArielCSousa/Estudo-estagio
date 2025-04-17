import { Tarefa } from './../interface/tarefa';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarefaService } from 'src/app/service/tarefa.service';

import {
  checkButtonTrigger,
  filterTrigger,
  highlightedStateTrigger,
  shownStateTrigger,
  fomrButtonTrigger,
  flyInOutTrigger,
  shakeTrigger,
  listStateTrigger,
} from '../animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css'],
  animations: [
    highlightedStateTrigger,
    shownStateTrigger,
    checkButtonTrigger,
    filterTrigger,
    fomrButtonTrigger,
    flyInOutTrigger,
    shakeTrigger,
    listStateTrigger,
  ],
})
export class ListaTarefasComponent implements OnInit {
  listaTarefas: Tarefa[] = [];
  formAberto: boolean = false; //com true o formulário sempre vai iniciar aberto na nossa aplicação
  categoria: string = '';
  validado: boolean = false;
  indexTarefa = -1; //inicializando com -1,pois o indice do primeiro elemento do array é 0 e não queremos que nenhum card inicialize DESTACADO
  id: number = 0;
  // Implementação da parte dois
  campoBusca: string = '';
  tarefasFiltradas: Tarefa[] = [];
  tarefasSubscription: Subscription = new Subscription();

  estadoBotao: String = 'uncheked';

  formulario: FormGroup = this.fomBuilder.group({
    id: [0],
    descricao: ['', Validators.required],
    statusFinalizado: [false, Validators.required],
    categoria: ['Casa', Validators.required],
    prioridade: ['Alta', Validators.required],
  });

  constructor(
    private service: TarefaService,
    private fomBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.service.listar();

    this.tarefasSubscription = this.service.tarefas$.subscribe((tarefas) => {
      this.listaTarefas = tarefas;
      this.tarefasFiltradas = tarefas;
    });
  }

  filtrarTarefaPorDescricao(descricao: string) {
    //primeiro vamos fazer o tratamento, removendo espaços em branco com trim() e deixando a fonte minuscula com ToLowerCase()
    this.campoBusca = descricao.trim().toLowerCase();
    //agora vem a lógica
    if (descricao) {
      this.tarefasFiltradas = this.listaTarefas.filter((tarefa) =>
        tarefa.descricao.toLowerCase().includes(this.campoBusca)
      );
    } else {
      this.tarefasFiltradas = this.listaTarefas;
    }
  }

  mostrarOuEsconderFormulario() {
    this.formAberto = !this.formAberto;
    this.resetarFormulario();
  }

  salvarTarefa() {
    if (this.formulario.value.id) {
      this.editarTarefa();
    } else {
      this.criarTarefa();
    }
  }

  editarTarefa() {
    if (this.formulario.valid) {
      const tarefaEditada = this.formulario.value;
      this.service.editar(tarefaEditada, true);
      this.resetarFormulario();
    }
  }

  criarTarefa() {
    if (this.formulario.valid) {
      const novaTarefa = this.formulario.value;
      this.service.criar(novaTarefa);
      this.resetarFormulario();
    }
  }

  excluirTarefa(tarefa: Tarefa) {
    if (tarefa.id) {
      this.service.excluir(tarefa.id);
    }
  }

  cancelar() {
    this.resetarFormulario();
    this.formAberto = false;
  }

  resetarFormulario() {
    this.formulario.reset({
      descricao: '',
      statusFinalizado: false,
      categoria: '',
      prioridade: '',
    });
  }

  // recarregarComponente() {
  //   this.router.navigate(['/listaTarefas']);
  // }

  // atualizarComponente() {
  //   this.recarregarComponente();
  //   this.resetarFormulario();
  // }

  carregarParaEditar(id: number) {
    this.service.buscarPorId(id!).subscribe((tarefa) => {
      this.formulario = this.fomBuilder.group({
        id: [tarefa.id],
        descricao: [tarefa.descricao],
        categoria: [tarefa.categoria],
        statusFinalizado: [tarefa.statusFinalizado],
        prioridade: [tarefa.prioridade],
      });
    });
    this.formAberto = true;
  }

  finalizarTarefa(tarefa: Tarefa) {
    this.id = tarefa.id;
    this.service.atualizarStatusTarefa(tarefa);

    if (tarefa.statusFinalizado == true) {
      this.estadoBotao = 'checked';
    } else {
      this.estadoBotao = 'unchecked';
    }
  }

  // listarAposCheck() {
  //   this.service.listar(this.categoria).subscribe((listaTarefas) => {
  //     this.tarefasFiltradas = listaTarefas;
  //   });
  // }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao-salvar';
    } else return 'botao-desabilitado';
  }

  campoValidado(campoAtual: string): string {
    if (
      this.formulario.get(campoAtual)?.errors &&
      this.formulario.get(campoAtual)?.touched
    ) {
      this.validado = false;
      return 'form-tarefa input-invalido';
    } else {
      this.validado = true;
      return 'form-tarefa';
    }
  }
}
