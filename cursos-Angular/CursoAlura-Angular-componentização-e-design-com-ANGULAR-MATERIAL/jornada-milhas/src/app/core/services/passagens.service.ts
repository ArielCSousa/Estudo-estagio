import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DadosBusca, Destaques, Passagem, Resultado } from '../types/type';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PassagensService {
  apiUrl: string = environment.apiUrl;
  precoMin: number = 0;
  precoMax: number = 0;

  constructor(private httpCliente: HttpClient) {}

  getPassagens(search: DadosBusca): Observable<Resultado> {
    const params = this.converterParametrosParaString(search);
    const obs = this.httpCliente.get<Resultado>(
      this.apiUrl + '/passagem/search?' + params
    );
    obs.pipe(take(1)).subscribe((res) => {
      this.precoMin = res.precoMin;
      this.precoMax = res.precoMax;
    });
    return obs;
  }

  converterParametrosParaString(busca: DadosBusca) {
    const query = Object.entries(busca)
      .map(([key, value]) => {
        if (!value) {
          return '';
        }
        return `${key}=${value}`;
      })
      .join('&');
    return query;
  }

  obterPassagensDestaques(passagem: Passagem[]): Destaques | undefined {
    //primeiro verifica se a lista está vazia, e se estiver retorna undefined
    if (!passagem.length) {
      return undefined;
    }

    //se a lista de passagens não estiver vazia, a função inicia ordenando as passagens de acordo com o tempo de voo, onde a passagem com o tempo de voo mais curto é retornado como "maisRapida"
    let ordenadoPorTempo = [...passagem].sort(
      (a, b) => a.tempoVoo - b.tempoVoo
    );

    //em seguida, nesse trecho, ordena por preço, onde a passagem com o preço mais mais baixo é retornada como "maisBarata"
    let ordenadoPorPreco = [...passagem].sort((a, b) => a.total - b.total);

    let maisRapida = ordenadoPorTempo[0]; //retorno da mais rapido
    let maisBarata = ordenadoPorPreco[0]; //retorno da mais barata

    //aqui se cria uma nova lista de passagens ordenadas pela média de tempo de voo e do preço da passagem, a passagem com a média mais alta é retornada em "sugerida"
    let ordenadoPorMedia = [...passagem].sort((a, b) => {
      let pontuacaoA =
        (a.tempoVoo / maisBarata.tempoVoo + a.total / maisBarata.total) / 2;
      let pontuacaoB =
        (b.tempoVoo / maisBarata.total + b.total / maisBarata.total) / 2;
      return pontuacaoA - pontuacaoB;
    });
    let sugerida = ordenadoPorMedia[0]; //aqui é o retorno

    return { maisRapida, maisBarata, sugerida }; //aqui ele retorna um grupo de informações que conseguimos no código

    //agora, para passar essas informações para o componente de destaque, iniciamos com CRIANDO O @INPUT no "passagemDestaqueComponent" para receber o tipo de passagem recomendada e o nome
  }
}
