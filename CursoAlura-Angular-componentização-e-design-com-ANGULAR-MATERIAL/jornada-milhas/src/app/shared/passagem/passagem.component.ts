import { Component, Input } from '@angular/core';
import { Passagem } from 'src/app/core/types/type';

@Component({
  selector: 'app-passagem',
  templateUrl: './passagem.component.html',
  styleUrls: ['./passagem.component.scss'],
})
export class PassagemComponent {
  @Input() passagem!: Passagem;
  textoIdaVolta: any;
}
