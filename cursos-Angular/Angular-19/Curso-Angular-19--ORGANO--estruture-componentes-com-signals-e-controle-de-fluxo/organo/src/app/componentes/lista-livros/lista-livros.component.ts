import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, Livro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css',
})
export class ListaLivrosComponent implements OnInit {
  generos: GeneroLiterario[] = []; //inicializando como array vazio
  livrosPorGenero: Map<string, Livro[]> = new Map(); //armazenar pares de chave e valor
  // nesse contexto seria o seguinte: a chave seria o ID  do genero, (uma string) e o valor vai ser um array de Livros[]

  ngOnInit(): void {
    //ao iniciar a pagina, vai inicializar a nossa propriedade livrosPorGenero ocmo um new Map()
    this.livrosPorGenero = new Map();
    // agora precisamos iterar por toda lista de livros e agrupar dentro do seu genero respectivo
    livros.forEach((livro) => {
      const generoId = livro.genero.id;
      //agora precisamos verificar se o genero já tem esse id e se não tiver podemos settar essa chave do id em um array
      if (!this.livrosPorGenero.has(generoId)) {
        //utilizo o has para verificar se o map já tem o id
        //se ele nao tiver eu quero settar o id do genero
        this.livrosPorGenero.set(generoId, []);
      }
      //peguei cada chave específica e settei o livro correspondente a esse genero
      this.livrosPorGenero.get(generoId)?.push(livro);
    });

    //populando o array de generos
    this.generos = [
      {
        id: 'romance',
        value: 'Romance',
        livros: this.livrosPorGenero.get('romance') ?? [],
      },
      {
        id: 'misterio',
        value: 'Mistério',
        livros: this.livrosPorGenero.get('misterio') ?? [],
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get('fantasia') ?? [],
      },
      {
        id: 'ficcao',
        value: 'Ficção',
        livros: this.livrosPorGenero.get('ficcao') ?? [],
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        livros: this.livrosPorGenero.get('tecnicos') ?? [],
      },
      {
        id: 'conto',
        value: 'Conto',
        livros: this.livrosPorGenero.get('conto') ?? [],
      },
    ];

    console.log(this.livrosPorGenero);
  }
}
