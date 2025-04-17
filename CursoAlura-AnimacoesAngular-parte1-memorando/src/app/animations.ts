import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { transform } from 'typescript';

export const highlightedStateTrigger = trigger('highlightedState', [
  state(
    'default',
    style({
      border: '2px solid #B2B6FF',
    })
  ),
  state(
    'highlighted',
    style({
      border: '4px solid #B2B6FF',
      filter: 'brightness(92%)',
    })
  ),
  transition('default => highlighted', [
    animate(
      '200ms ease-out',
      style({
        transform: 'scale(1.02)',
      })
    ),
    animate(200),
  ]),
]);

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    //elemento entrando no DOM
    style({
      opacity: 0,
    }),
    animate(
      300,
      style({
        opacity: 1,
      })
    ),
  ]),
  transition(':leave', [
    //elemento saindo do DOM
    animate(
      300,
      style({
        opacity: 0,
      })
    ),
  ]),
]);

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate(
      '400ms ease-in',
      style({
        transform: 'scale(0.4)',
      })
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
//
