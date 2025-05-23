import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css'],
})
export class BotaoComponent {
  @Input() btnConfigs: any;

  alert() {
    alert(this.btnConfigs.titulo);
  }
}
