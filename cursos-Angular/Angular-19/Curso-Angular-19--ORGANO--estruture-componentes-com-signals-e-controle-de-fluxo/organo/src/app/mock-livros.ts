import { Livro } from './componentes/livro/livro';

export const livros: Livro[] = [
  {
    titulo: 'A Metamorfose',
    autoria: 'Franz Kafka',
    genero: {
      id: 'ficcao',
      value: 'Ficção',
      livros: [],
    },
    favorito: true,
    imagem: 'https://imagens.disal.com.br/produtos/ampliada/5216370.jpg',
  },
  {
    titulo: 'O Processo',
    autoria: 'Franz Kafka',
    genero: {
      id: 'ficcao',
      value: 'Ficção',
      livros: [],
    },
    favorito: false,
    imagem:
      'https://cdn.awsli.com.br/2500x2500/2495/2495784/produto/271473134/403175-g6eake487n.jpg',
  },
  {
    titulo: 'O Castelo',
    autoria: 'Franz Kafka',
    genero: {
      id: 'ficcao',
      value: 'Ficção',
      livros: [],
    },
    favorito: true,
    imagem:
      'https://midias.em.com.br/_midias/jpg/2024/05/31/wpe7_castelo-37620557.jpg',
  },
  {
    titulo: 'Na Colônia Penal',
    autoria: 'Franz Kafka',
    genero: {
      id: 'conto',
      value: 'Conto',
      livros: [],
    },
    favorito: false,
    imagem:
      'https://img.travessa.com.br/livro/GR/d7/d70972e3-dea8-4fd7-914d-17ff6b3fd3a4.jpg',
  },
  {
    titulo: 'Um Artista da Fome',
    autoria: 'Franz Kafka',
    genero: {
      id: 'conto',
      value: 'Conto',
      livros: [],
    },
    favorito: false,
    imagem:
      'https://m.media-amazon.com/images/I/81ZBijHrrhL._UF894,1000_QL80_.jpg',
  },
  {
    titulo: 'Orgulho e Preconceito',
    autoria: 'Jane Austen',
    genero: {
      id: 'romance',
      value: 'Romance',
      livros: [],
    },
    favorito: true,
    imagem:
      'https://m.media-amazon.com/images/I/71Xta4Nf7uL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    titulo: 'O Morro dos Ventos Uivantes',
    autoria: 'Emily Brontë',
    genero: {
      id: 'romance',
      value: 'Romance',
      livros: [],
    },
    favorito: false,
    imagem:
      'https://m.media-amazon.com/images/I/71TmfSp53IL._UF894,1000_QL80_DpWeblab_.jpg',
  },
];
