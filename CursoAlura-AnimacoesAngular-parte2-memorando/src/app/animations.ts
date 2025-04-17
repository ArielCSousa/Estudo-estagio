import {
  animate,
  group,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { transform } from 'typescript';

export const highlightedStateTrigger = trigger('highlightedState', [
  state('default', style({ border: '2px solid #B2B6FF' })),
  state(
    'highlighted',
    style({ border: '4px solid #B2B6FF', filter: 'brightness(92%)' })
  ),
  transition('default => highlighted', [
    animate('200ms ease-out', style({ transform: 'scale(1.02)' })),
    animate(200),
  ]),
]);

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    //elemento entrando no DOM
    style({
      opacity: 0,
    }),
    animate(300, style({ opacity: 1 })),
  ]),
  transition(':leave', [
    //elemento saindo do DOM
    animate(300, style({ opacity: 0 })),
  ]),
]);

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate('400ms ease-in', style({ transform: 'scale(0.4)' })),
  ]),
]);

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({ opacity: 0, width: 0 }),
    animate(
      '400ms ease-out',
      keyframes([
        style({ offset: 0, opacity: 0, width: 0 }),
        style({ offset: 0.8, opacity: 0.5, width: '*' }),
        style({ offset: 1, opacity: 1, width: '*' }),
      ])
    ),
  ]),
  transition(':leave', [
    animate(
      '400ms cubic-bezier(.13,.9,.8,.1)',
      style({ opacity: 0, width: 0 })
    ),
  ]),
]);

// utilizar o método group melhora o resultado final visual do usuário e pode melhorar a performance,
export const fomrButtonTrigger = trigger('formButton', [
  transition('invalid => valid', [
    query('#botao-salvar', [
      group([
        animate(200, style({ backgroundColor: '#63B77C' })),
        animate(100, style({ transform: 'scale(1.1)' })),
      ]),
      animate(200, style({ transform: 'scale(1)' })),
    ]),
  ]),
  transition('valid => invalid', [
    query('#botao-salvar', [
      group([
        animate(200, style({ backgroundColor: '#6C757D' })),
        animate(100, style({ transform: 'scale(1.1)' })),
      ]),
      animate(200, style({ transform: 'scale(1)' })),
    ]),
  ]),
]);

//mensagem de aviso em movimento
export const flyInOutTrigger = trigger('flyInOut', [
  transition(':enter', [
    style({ width: '100%', transform: 'translateX(-100%)', opacity: 0 }),
    group([
      animate(
        '0.3s 0.1s ease',
        style({ transform: 'translateX(0)', width: '*' })
      ),
      animate('0.3s ease', style({ opacity: 1 })),
    ]),
  ]),
  transition(':leave', [
    group([
      animate(
        '0.3s ease',
        style({ transform: 'translateX(100%)', width: '*' })
      ),
      animate('0.3s 0.2s ease', style({ opacity: 0 })),
    ]),
  ]),
]);

export const shakeTrigger = trigger('shakeAnimation', [
  transition('* => *', [
    query(
      'input.ng-invalid:focus, select.ng-invalid:focus',
      [
        //esse ng-invalid/ng-valid é uma class do próprio angular
        animate(
          '0.5s',
          keyframes([
            style({ border: '2px solid red' }),
            style({ transform: 'translateX(0)' }),
            style({ transform: 'translateX(-10px)' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(-10px)' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(-10px)' }),
            style({ transform: 'translateX(10px)' }),
            style({ transform: 'translateX(0)' }),
          ])
        ),
      ],
      { optional: true }
    ),
  ]),
]);

//animação que fará a lista aparecer para o usuário ao carregar a página pela primeira vez
export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateX(-100%)', //fora da tela
        }),
        stagger(200, [
          //o valor é o delay entre cada item
          animate(
            '500ms ease-out',
            keyframes([
              style({
                opacity: 1,
                transform: 'translateX(5%)', //vai 5% a mais para a direita ao aparecer
                offset: 0.4,
              }),
              style({
                opacity: 1,
                transform: 'translateX(0)', // volta para a posição que deverá ficar
                offset: 1,
              }),
            ])
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

// ===========================================================================
// O que cada parte faz:

// trigger('highlightedState', [...])
// Define o nome da animação (highlightedState), que você vai usar no HTML.

// state('default', style({ ... }))
// Define como o elemento vai parecer no estado default.

// state('highlighted', style({ ... }))
// Define o estilo visual quando está no estado highlighted.
// ===========================================================================
// ===========================================================================
// Podemos mudar a expressão ‘void => ’ por ‘:enter’
// e ' => void' equivale a  ':leave'.
// ===========================================================================
// ===========================================================================
//> trigger() - inicia a animação e serve como um contêiner para todas as outras
// chamadas de função de animação. O template é vinculado ao nome do trigger,
// que é declarado como primeiro argumento da função. Usa sintaxe de matriz.

//> style() - define um ou mais estilos CSS para usar em animações. Controla a
// aparência visual dos elementos HTML durante as animações. Usa sintaxe de objeto.

//> state() - cria um conjunto nomeado de estilos CSS que devem ser aplicados na
// transição bem-sucedida para um determinado estado. O estado pode então ser
// referenciado pelo nome dentro de outras funções de animação.

//> animate() - especifica as informações de tempo para uma transição. Valores
// opcionais para delay e easing function. Pode conter métodos style().

//> transition() - define a sequência de animação entre dois estados nomeados.
// Usa sintaxe de matriz.
// ===========================================================================
// ===========================================================================
// >>>> KEYFRAMES E OFFSET <<<<
// Os keyframes definem os estados intermediários da animação
// e o offset é usado para definir a posição de cada estado intermediário
// em relação ao tempo total de execução da animação, criando uma transição
// suave entre esses estados.

//  -offset é uma propriedade que recebe um valor numérico entre 0 e 1. Assim,
// podemos controlar o momento exato em que a mudança da propriedade css acontece.

//  -Os keyframes() animam vários estilos intermediários. Porém,
// em animações mais curtas como a nossa não ficam tão perceptíveis.
// Os keyframes() são recursos muito importantes para criarmos animações no Angular.
// A partir deles, podemos inserir estilos intermediários nas animações, além de
// controlar o tempo em que as mudanças de propriedades css acontecerão.
// ===========================================================================
// ===========================================================================
// >>>>>A função query permite selecionar elementos específicos do DOM
//  para aplicar a animação.<<<<<

// A função query permite selecionar elementos específicos do DOM para aplicar a animação,
// o que pode ser útil em casos onde é necessário aplicar a animação em um elemento
// específico, como um botão dentro de um formulário.
// ******Utilizamos o ID do DOM para ESPECIFICAR A QUERY PARA A ANIMAÇÃO.

// Colocamos dentro do método group() todas as animações que queremos que
// aconteçam   simultaneamente.
// Em outras palavras:
// Quando há várias animações que precisam ser executadas simultaneamente,
// é possível utilizá-las dentro de um método group para que ocorram ao mesmo tempo.
// ===========================================================================
// ===========================================================================
// exemplo de código:   {...}
//                      query('.my-element', { optional: true })
//                      {...}
// A opção {optional: true} garante que a animação seja aplicada apenas a
// elementos com a classe .my-element que existam no momento da execução da animação.
// ===========================================================================
// ===========================================================================
// O BehaviorSubject é uma classe que permite manter o estado da animação
// em um componente, permitindo que você adeque a animação de acordo com o estado atual.

// O BehaviorSubject emite o valor atual e mantém uma lista de seus “observadores”,
// o que permite que o estado seja facilmente compartilhado entre vários componentes.
// ===========================================================================
// ===========================================================================
