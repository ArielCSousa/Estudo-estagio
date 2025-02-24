// entendendo o método filter, map e reduce

//EXEMPLO UTILIZANDO FILTER

//O desafio dessa semana foi o seguinte, dado o array `empresas`: 

const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

// Tenho que exibir as seguintes informações:

// - Empresas criadas depois dos anos 2000.
// - O nome de cada empresa e de seu CEO.
// - O valor de todas as empresas somadas.

// A primeira coisa que precisamos mostrar são as empresas criadas depois dos anos 2000. 
// O que podemos fazer nesse caso é criar uma maneira de filtrar o array para conseguir exibir essa informação.
//Por sorte já existe um método para fazer esse tipo de filtro, que é o >filter<
//Ele vai percorrer todo o array e criar um novo com todos os elementos que passaram no teste implementado

//Para filtrar é preciso chamar o nome do array seguido de um ponto (.) 
// e seguido do nome da propriedade(nesse caso é o ano de criação):

empresas.anoDeCriacao

//agora criamos a condição para exibir o anoDeCriacao mais que 2000 dentro do >filter<

const anoDeCriacao = empresas.filter(empresa => (empresa.anoDeCriacao > 2000));

console.log(anoDeCriacao);


//O RESULTADO ESPERADO É:

// [ { nome: 'Facebook',
//     valorDeMercado: 383,
//     CEO: 'Mark Zuckerberg',
//     anoDeCriacao: 2004 },
//   { nome: 'Spotify',
//     valorDeMercado: 30,
//     CEO: 'Daniel Ek',
//     anoDeCriacao: 2006 } ]
// ----------------------- Finalizado a extração das empresas do ano de criação = 2000 -------------------------



//  EXEMPLO DO MÉTODO >MAP< DENTRO DO MESMO CONTEXTO DO FILTER

//Agora para a segunda tarefa pedida temos que exibir o nome das empresas e de seus CEOs

//Para buscar esse dois valores utilizaremos o map, com ele é possível percorrer todos os itens do array,
// executar alguma transformação nos itens e retornar um novo array sem modificar o atual percorrido.
//No nosso caso vamos percorrer o array e dentro de cada objeto vamos pegar as propriedades nome e CEO de cada empresa.

const exibeInformacoes = empresas.map( empresa => `${empresa.nome}` + ' CEO: ' + `${empresa.CEO}`);
console.log( exibeInformacoes )

//Temos como resposta:

// [ 'Samsung CEO: Kim Hyun Suk',
//   'Microsoft CEO: Satya Nadella',
//   'Intel CEO: Brian Krzanich',
//   'Facebook CEO: Mark Zuckerberg',
//   'Spotify CEO: Daniel Ek',
//   'Apple CEO: Tim Cook' ]

// Agora falta exibir o valor de todas as empresas somadas




// ------------------EXEMPLO DA UTILIZAÇÃO DO >REDUCE< NO MESMO CONTEXTO DE EMPRESAS ----------------------

//O método >REDUCE< passa por cada item do array fazendo uma expressão escolhida,
// e no final vai devolver um único valor. Exatamente o que precisamos para fazer a soma do valor de mercado das empresas.

//Ele recebe dois valores, um acumulado e um atual, no nosso caso o acumulado irá somar com o atual. 
// Como no primeiro loop da soma não temos nenhum valor acumulado,
//  então precisamos passar como segundo parâmetro esse valor, que no nosso caso vai ser 0.

//Se não tivéssemos passado um valor de acumulado o `reduce` pegaria o primeiro item do array, tomando o como se fosse o valor acumulado.

const total = empresas.reduce((resultado, quantidade) => {
    return (resultado + quantidade.valorDeMercado );
}, 0);

//RESULTADO ESPERADO:

console.log( total )
//1840

