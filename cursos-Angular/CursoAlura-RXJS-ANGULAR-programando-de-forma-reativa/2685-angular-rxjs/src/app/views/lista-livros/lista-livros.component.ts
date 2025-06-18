import {
  switchMap,
  map,
  tap,
  filter,
  debounceTime,
  throwError,
  catchError,
  EMPTY,
  of,
  BehaviorSubject,
  combineLatest,
  Subscribable,
  Observable,
  distinctUntilChanged,
} from 'rxjs';
import { Component } from '@angular/core';
import { LivroService } from 'src/app/service/livro.service';
import { Item, LivrosResultado } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { FormControl } from '@angular/forms';
import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { transform } from 'typescript';

const PAUSA = 300; //MILESSEGUNDOS

const RESULTADOS_POR_PAGINA = 8; //PAGINAÇÃO

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-50px)' }),
            stagger('100ms', [
              animate(
                '500ms ease-out',
                keyframes([
                  style({
                    opacity: 0,
                    transform: 'translateY(-50px)',
                    offset: 0,
                  }),
                  style({
                    opacity: 0.5,
                    transform: 'translateY(-25px)',
                    offset: 0.3,
                  }),
                  style({ opacity: 1, transform: 'none', offset: 1 }),
                ])
              ),
            ]),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            stagger('100ms', [
              animate(
                '500ms ease-out',
                keyframes([
                  style({ opacity: 1, transform: 'none', offset: 0 }),
                  style({
                    opacity: 0.5,
                    transform: 'translateY(-25px)',
                    offset: 0.3,
                  }),
                  style({
                    opacity: 0,
                    transform: 'translateY(-50px)',
                    offset: 1,
                  }),
                ])
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
//
export class ListaLivrosComponent {
  // listaLivros: Livro[];
  // campoBusca: string = ''; //eu poderia inicializar sem tipagem cpor estar vazio
  campoBusca = new FormControl();
  // subscription: Subscription;
  // livro: Livro;
  mensagemErro = '';
  livrosResultado: LivrosResultado;
  paginaAtual = 0;
  private paginaAtualSubject = new BehaviorSubject<number>(0);
  totalDeLivros$:
    | Observable<unknown>
    | Subscribable<unknown>
    | Promise<unknown>;
  totalDeLivros: number;
  query: unknown;

  constructor(private service: LivroService) {}

  livrosEncontrados$ = combineLatest([
    this.campoBusca.valueChanges.pipe(
      debounceTime(PAUSA),
      filter((valorDigitado) => valorDigitado.length >= 3),
      distinctUntilChanged(),
      filter((valorDigitado) => valorDigitado !== this.query),
      tap((valorDigitado) => {
        console.log('Início do fluxo', valorDigitado);
        this.query = valorDigitado;
        this.paginaAtual = 0;
        this.paginaAtualSubject.next(this.paginaAtual);
      })
    ),
    this.paginaAtualSubject,
  ]).pipe(
    switchMap(([valorDigitado, paginaAtual]) =>
      this.service.buscar(
        valorDigitado,
        paginaAtual * RESULTADOS_POR_PAGINA,
        RESULTADOS_POR_PAGINA
      )
    ),
    tap((resultado) => {
      this.totalDeLivros = resultado.totalItems;
      console.log('Resultado da API:', resultado);
    }),
    map((resultado) => resultado.items ?? []),
    map((items) => this.livrosResultadoParaLivros(items)),
    catchError((erro) => {
      console.log(erro);
      this.mensagemErro = 'Ops, ocorreu um erro. Recarregue a aplicação!';
      return throwError(() => new Error(this.mensagemErro));
    })
  );

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => new LivroVolumeInfo(item));
  }

  proximaPagina() {
    this.paginaAtual++;
    this.paginaAtualSubject.next(this.paginaAtual);
  }

  paginaAnterior() {
    if (this.paginaAtual > 0) {
      this.paginaAtual--;
      this.paginaAtualSubject.next(this.paginaAtual);
    }
  }
}

// totalDeLivros$ = this.campoBusca.valueChanges.pipe(
//   debounceTime(PAUSA),
//   filter((valorDigitado) => valorDigitado.length >= 3),
//   tap(() => console.log('Fluxo inicial')),
//   switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
//   map((resultado) => (this.livrosResultado = resultado)),
//   catchError((erro) => {
//     console.log(erro);
//     return of();
//   })
// );
//por convenção,não é obrigatório, quando é um OBSERVABLE SE USA $ AO FINAL DO NOME DA VARIAVEL
// valueChanges -> a cada vez que tiver uma mudança nesse campo de busca ele vai emitir um evento
// como esse método me retorna um OBSERVABLE eu posso usar os operadores do RXJS para manipular essas informações

//=========================================================================

// livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
//   //switchmap vai cancelar as chamadas anteriores e vai buscar apenas o ultimo valor informado
//   //a ordem dos operadores alterado o resultado, por isso o fitler vem primeiro
//   // debouncetime serve para colocar um delay no carregamento da requisição, dando tempo para o usuário digitar o nome do livro antes de pesquisar
//   debounceTime(PAUSA),
//   filter((valorDigitado) => valorDigitado.length >= 3),
//   tap(() => console.log('Fluxo inicial')),
//   switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
//   map((resultado) => (this.livrosResultado = resultado)),
//   tap((retornoAPI) => console.log(retornoAPI)),
//   map((resultado) => resultado.items ?? []),
//   map((items) => this.livrosResultadoParaLivros(items)),
//   catchError((erro) => {
//     console.log(erro);
//     return throwError(
//       () =>
//         new Error(
//           (this.mensagemErro =
//             'Ops, ocorreu um erro. Recarregue a aplicação!')
//         )
//     );
//   })
// );

//============================================================================
//livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
//   return items.map((item) => {
//     return new LivroVolumeInfo(item);
//   });
// }
//==========================================================================

// catchError(() => {
// this.mensagemErro = 'Ops, ocorreu um erro. Recarregue a aplicação!';
// return EMPTY;
//============sobre o EMPTY==============================================
//EMPTY encerra o ciclo de vida do OBSERVABLE, por isso é necessário recarregar a aplicação quando dá esse erro
//Podemos usar o EMPTY como callback de inscrição para o catchError se não quisermos fazer nada com o erro.
//Nesse caso, o observable é imediatamente completado com o EMPTY.
//=========================================================================

//====== SWITCHMAP / FILTER / DEBOUNCETIME / DISTINCTUNTILCHANGES ========================
// switchMap - Operador de Transformação. Cancela requisições de observables anteriores, emitindo valores apenas do Observable projetado mais recentemente.

// filter - Operador de filtragem. Filtra os itens emitidos pelo Observable de origem, permitindo apenas aqueles que satisfaçam uma condição especificada.

// debounceTime - Operador de filtragem. Retorna um Observable que atrasa as emissões do Observable de origem pelo tempo especificado.

// distinctUntilChanged - Operador de filtragem. Retorna um Observable que emite todos os valores enviados pelo observable de origem se forem distintos em comparação com o último valor emitido pelo observable de resultado.
// =======================================================================================

//esse é nosso observer, e o observable dele é o busca() em livro.service
// buscarLivros() {
//   this.subscription = this.service.buscar(this.campoBusca).subscribe({
//     //usamos argumentos de observer, como o next e o error. E podemos passar o complete também.
//     next: (items) => {
//       this.listaLivros = this.livrosResultadoParaLivros(items);
//     },
//     error: (erro) => console.error(erro),
//   }); //criei o método buscar no service e estou consumindo nesse componente
//   //foi necessário usar o SUBSCRIBE para INFORMAR AO OBSERVABLE QUE EU ESTOU INTERESSADA NO RETORNO DELE, pois o OBSERVABLE É PREGUIÇOSO e só informa quem está inscrito/esperando o retorno dele
//   //O SUBSCRIBE TEM O PODER DE CONECTAR O OBSERVE AO OSERBVABLE
// }

// .subscribe(data => this.config = {
//   heroesUrl: (data as any).heroesUrl,
//   textfile:  (data as any).textfile,
// });

//==================== FOREACH ============================================
//Esse forEach está passando por cada item do array items, e para cada item, ele cria um objeto this.livro com os dados do livro.
//========================================================================

// ngOnDestroy() {
//   this.subscription.unsubscribe(); //esse método vai apenas encerrar o observable que recebemos em buscarLivros().
// }

//PADRÃO OBSERVER(PUB(publicação)/SUB(assinatura)) é a base da programação orientada a eventos

//Quando um evento acontece, o observable notificará todos os observers e cada observer puxará as informações de que precisa do observable.
// O Observer é uma coleção de callbacks que sabe escutar os valores entregues pelo Observable.

//Assinar um observable é como chamar uma função, fornecendo retornos de chamada para onde os dados serão entregues.
// Através da subscription, que representa a execução de um Observable, é possível conectar observer e observable.

//Sempre que realizamos um subscribe, temos como boa prática a realização do unsubscribe para liberar recursos e evitar vazamentos de memória. É um processo similar a quando assinamos um tipo de serviço e cadastramos nosso cartão de crédito. Somos cobrados mensalmente por conta desse serviço, e mesmo que não estejamos mais interessados nele, a cobrança continuará sendo feita, a menos que retiremos nosso cartão do cadastro (ou seja, realizemos a desinscrição no serviço)

// function ngOnDestroy() {
//   throw new Error('Function not implemented.');
// }

//==================================================================================================================
//>>>>>>>>>>>>>>>>>>>>>>>> Colinha de operadores RxJS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Para lidar com erros na aplicação, utilizamos mais alguns operadores importantes do RxJS. Aproveite a sua colinha e use sempre que precisar!

// catchError - Operador de Tratamento de Erros. Captura erros no observable manipulado retornando um novo observable ou lançando um erro.

// throwError - Operador de Criação. Cria um observable que criará uma instância de erro e a enviará ao consumidor como um erro imediatamente após a assinatura.

// EMPTY - Operador de Criação. Cria um Observable simples que não emite itens para o Observer e imediatamente emite uma notificação de complete.

// of - Operador de Criação. Converte os argumentos em observable. Um Observable que emite os argumentos descritos e depois conclui.

//=========================================================================
// Explicando a animação:

// Foi definido um trigger de animação com o nome listAnimation. Esse trigger será ativado toda vez que houver uma transição entre estados, denotado pelo uso do operador transition('* <=> *').

// Dentro da transição, há duas consultas (query): a primeira para elementos que estão entrando (:enter) e a segunda para elementos que estão saindo (:leave).

// Para os elementos que estão entrando, é definido um estilo inicial (style) de opacity: 0 e transform: 'translateY(-50px)'. Isso fará com que os elementos comecem invisíveis e acima da posição final, criando o efeito de que estão descendo.

// Em seguida, é usada a função stagger('100ms'), que irá atrasar a animação de cada elemento da lista em 100ms em relação ao elemento anterior. Isso cria um efeito de "sequência" na animação dos elementos.

// Dentro do stagger, é usada a função animate('500ms ease-out') para aplicar a animação. Essa função recebe um tempo de duração (500ms) e uma função de tempo (ease-out), que controla a aceleração da animação.

// Dentro da função animate, é usada a função keyframes([...]) para definir a animação em si. Essa função recebe um array de objetos, onde cada objeto representa um momento na animação.

// Cada objeto do array de keyframes contém as propriedades opacity e transform, que serão animadas ao longo do tempo. Além disso, cada objeto também contém uma propriedade offset, que define o momento exato em que a animação deve ocorrer. No caso dessa animação, temos três momentos (0%, 30% e 100%) representados pelos offsets 0, 0.3 e 1, respectivamente.

// O primeira keyframe (offset: 0) define o estilo inicial da animação. O segunda keyframe (offset: 0.3) define o estilo intermediário, com opacity: 0.5 e transform: 'translateY(-25px)', criando o efeito de que o elemento está descendo. O terceira e último keyframe (offset: 1) define o estilo final da animação, com opacity: 1 e transform: 'none', indicando que o elemento chegou ao seu destino final.

// Para os elementos que estão saindo, é feito um processo semelhante, com a diferença de que a animação irá para cima, em vez de para baixo. Isso é feito mudando os valores de transform no segundo e terceiro keyframes para translateY(-25px) e translateY(-50px), respectivamente.

// Com isso, os elementos do Buscante animam-se de forma sequencial ao serem adicionados ou removidos, criando um efeito visual interessante e dinâmico.
