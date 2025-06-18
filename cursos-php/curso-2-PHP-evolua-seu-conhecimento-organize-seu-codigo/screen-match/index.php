<?php


include __DIR__ . "/src/funcoes.php";
// O include faz o mesmo que o require, com uma diferença. Se ele não achar o arquivo, ele não vai dar erro irrecuperável, ou seja, um erro fatal. Ele dará outro tipo de erro, pois tentará continuar executando o código.



// require __DIR__ . "/src/funcoes.php";
// 
//chamando o arquivo com minhas funcoes
//A constante __DIR__ é o que chamamos de uma constante mágica. Com ela, podemos recuperar o diretório do arquivo. Se usada dentro de um include ou require, o diretório do arquivo incluído será retornado.


echo "\nBem-vindo(a) ao screen match!\n";

$nomeFilme = "Top Gun - Maverick";

$anoLancamento = 2022;

$quantidadeDeNotas = $argc - 1;
$notas = [];

for ($contador = 1; $contador < $argc; $contador++) {
    $notas[] = (float) $argv[$contador];
}

$notaFilme = array_sum($notas) / $quantidadeDeNotas;
$planoPrime = true;

$incluidoNoPlano = incluidoNoPlano($planoPrime, $anoLancamento); //utilizando função



echo "Nome do filme: " . $nomeFilme . "\n";
echo "Nota do filme: $notaFilme\n";
echo "Ano de lançamento: $anoLancamento\n";

exibeMensagemLancamento($anoLancamento); //utilizando função


$genero = match ($nomeFilme) {
    "Top Gun - Maverick" => "ação",
    "Thor: Ragnarok" => "super-herói",
    "Se beber não case" => "comédia",
    default => "gênero desconhecido",
};

echo "O gênero do filme é: $genero\n";

$filme = criaFilme(
    nome: "Thor: Ragnarok", 
    anoLancamento: 2021, 
    nota: 7.8, 
    genero:"super-herói"
);


echo $filme["ano"];
echo "\n";

// incluidoNoPlano();


var_dump($notas); //exibi o valor e o tipo de determinada variavel e não é usada em ambiente de protução, serve apenas para inspecionar/investigar algumas coisas

sort($notas); //essa função ordena itens de um array

var_dump($notas); //chamando essa função novamente para visualizar a lista ordenada com o sort()

$menorNota = min($notas); //pegando a menor nota do meu array

echo $menorNota; //mostra a menor nota pega pelo min()
// var_dump($menorNota);

echo "\n";

//var_dump($filme['nome']); //exibe que é do tipo STRING, o tamanho da STRING e o seu conteúdo

$posicaoDoisPontos = strpos($filme['nome'],':' );
//encontrar os caractyere ":" em uma string, como no titulo do filme que estamos utilizando
// strpos significa string position, primeiro passando onde eu quero buscar, e em segundo parametro eu passo O QUE EU VOU BUSCAR
var_dump($posicaoDoisPontos);

//função substr espera alguns parametros, 
// primeiro parametro: STRING DA QUAL EU QUERO EXTRAIR ALGUMA COISA, 
// segundo parametro: inicio de onde eu quero extrair, a partir de onde,
// terceiro parametro: OPCIONAL!

var_dump(substr($filme['nome'], 0, $posicaoDoisPontos));

// transforma em json
// echo json_encode($filme);

//transformar de volta uma string em json em um array associativo
// var_dump(json_decode('{"nome":"Thor: Ragnarok", "ano":2021, "nota":7.8, "genero":"super-her\u00f3i"}', true));
/*
A função json_decode vai receber uma string como primeiro parâmetro e transformá-la em um objeto por padrão. Ao passar 'true' como segundo parâmetro, o PHP retornará um array associativo ao invés de um objeto.
*/

//======================================
// EXPORTAR:
$filmeComoStringJson = json_encode($filme);

file_put_contents(__DIR__ . '/filme.json', $filmeComoStringJson);
//======================================
//IMPORTAR:
    // Vamos criar um outro arquivo, chamado importar.php para fazer a importação
//======================================



 


