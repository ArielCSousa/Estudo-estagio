import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.css'],
})
export class BotaoCarregarMaisComponent implements OnInit {
  //o decorador @input é para a propriedade receber informações do elemento pai
  @Input() haMaisPensamentos: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
