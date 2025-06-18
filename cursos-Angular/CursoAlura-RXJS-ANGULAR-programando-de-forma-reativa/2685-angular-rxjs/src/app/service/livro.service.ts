import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  // SOLUÇÃO COM PAGINAÇÃO
  buscar(
    valorDigitado: string,
    startIndex: number = 0,
    maxResults: number = 10
  ): Observable<LivrosResultado> {
    const params = new HttpParams()
      .append('q', valorDigitado)
      .append('startIndex', startIndex.toString())
      .append('maxResults', maxResults.toString());
    return this.http.get<LivrosResultado>(this.API, { params });
  }
}

// //esse é nosso observable e o buscar() em lista-livros.ts é o nosso observer
// buscar(valorDigitado: string): Observable<LivrosResultado> {
//   const params = new HttpParams().append('q', valorDigitado);
//   return this.http.get<LivrosResultado>(this.API, { params });
//   // .pipe
//   //tap((retornoAPI) => console.log('Fluxo do tap', retornoAPI)),
//   // map((resultado) => resultado.items ?? []),
//   // tap((resultado) => console.log('Fluxo após o map', resultado))
// }

//sobre o pipe() => Ele servirá para agrupar diversos outros tipos de operadores, então é como a tradução "cano" em que passará o fluxo de informações para aplicarmos as transformações.

//sobre o tap() => é como se fosse um "espião", ou seja, é utilizado apenas para debug da aplicação.
//utilizamos o operador tap() para recebermos o objeto complexo com todos os dados referentes à busca que fizemos.

//Quando queremos aplicar uma transformação em JavaScript, poderemos usar o método .map().
// Já em RxJS, existe o operador map(). Após o fechamento de tap(), digitaremos uma vírgula e o adicionaremos recebendo resultado.

// O map do RxJS é similar ao map do JavaScript. No código acima, estamos realizando a transformação dos dados e o retorno será os itens do retorno da API.
// Os operadores, quando conectados a um Observable, executam uma ação e retornam outro Observable. Numa versão anterior, tínhamos o operador pluck, que fazia o mesmo que o map e era usado para extrair um atributo de objeto, mas ele está depreciado e agora precisamos usar o map para isso.

// Pipe- Função que serve para agrupar múltiplos operadores. Não modifica o observable anterior.

// Tap - Operador de serviços públicos. Usado para debugging. Não modifica o observable.

// Map - Operador de transformação. Transforma o observable de acordo com a função passada. Retorna um observable modificado
