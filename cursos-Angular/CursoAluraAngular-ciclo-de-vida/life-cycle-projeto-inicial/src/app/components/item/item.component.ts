import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item; //criando propriedade de entrada, com essa propriedade eu consigo fazer um property bind e recebe informação externa do elemento pai

  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem() {
    console.log('deletarItem sendo chamado');
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  // checarItem() {
  //   if (this.item.comprado == true) {
  //     this.item.comprado = false;
  //   } else {
  //     this.item.comprado = true;
  //   }
  // }

  ngOnDestroy() {
    console.log('ondestroy');
  }
}
