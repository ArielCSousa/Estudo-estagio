import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [];

  constructor() {
    // console.log('Instanciando dependências necessárias para o serviço.');

    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false,
    };
    return item;
  }

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(item);
    // this.atualizarLocalStorage();
  }

  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado,
    };
    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado); //percorrendo meu array, pesquisar pelo id na posição -1 e vou remover 1 item de acordo com o meu id, e vou substituir pelo item editado

    // this.atualizarLocalStorage();
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}
