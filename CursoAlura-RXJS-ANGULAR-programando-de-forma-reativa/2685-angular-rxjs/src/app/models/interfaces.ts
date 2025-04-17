export interface Livro {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  previewLink?: string;
  thumbnail?: ImageLinks;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  pageCount: number;
  printType: string;
  mainCategory: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  contentVersion: string;
  imageLinks: ImageLinks;
  language: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

export interface Item {
  volumeInfo: VolumeInfo;
}

export interface LivrosResultado {
  items: Item[];
  totalItems: number;
}

// Definir uma interface com as propriedades necessárias;
// Especificar essa interface como o parâmetro de tipo da chamada HttpClient.get() no serviço;
// Transformar os dados de resposta conforme necessário pela interface do usuário;
// Converter explicitamente o objeto simples obtido do JSON para o tipo de resposta necessário.(convertemos pelo site: https://app.quicktype.io/)
// Sim, esse é o passo a passo correto encontrado na documentação. Dessa forma, os dados retornados serão transformados e podemos manipulá-los da forma desejada.

//============== PQ TER TODAS ESSAS INTERFACES E NÃO SÓ UMA? ======================

//>>>>>>>>> Separar por responsabilidade (coerência) <<<<<<<<<

// Cada interface representa uma parte específica dos dados que a API retorna. Por exemplo:
// -ImageLinks: só cuida dos links das imagens.
// -VolumeInfo: cuida das informações detalhadas do livro.
// -Livro: uma estrutura mais resumida que talvez seja usada na UI.
// -Item: representa cada entrada dentro do array de items.
// -LivrosResultado: representa a resposta completa da API.
// ➡️ -Se colocássemos tudo numa só, ficaria uma estrutura enorme, difícil de entender e de manter.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//>>>>>>>>> Reutilização <<<<<<<<<

//Separando em partes, você pode usar a interface ImageLinks tanto em VolumeInfo quanto em Livro, por exemplo.

//          interface Livro {
//              thumbnail?: ImageLinks;
//            }
//
//Se você precisasse usar só o ImageLinks em outro lugar do projeto (por exemplo, num componente de galeria), já tem pronto!

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//>>>>>>>>>  API pode mudar ou crescer <<<<<<<<<

// -Se a API mudar no futuro e, por exemplo, VolumeInfo ganhar um novo campo, você só atualiza uma interface e pronto. Isso evita ter que mexer em um monstro gigante de tipo que está em todo lugar.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//>>>>>>>>> E A INTERFACE {Livro} ? <<<<<<<<<

//-{Livro} parece um resumo de {VolumeInfo}, né?

//                export interface Livro {
//                title?: string;
//                authors?: string[];
//                etc...
//                }

//Isso é útil quando você não precisa de todos os dados que vêm da API. Aí você transforma a resposta da API (que é um LivrosResultado) em um array de Livro, por exemplo, só com os dados necessários pra sua tela.
