<?php

echo "\nBem-vindo(a) ao screen match!\n\n";// assim eu pulo a linha para exibir o titulo do filme que ficou de exemplo ali embaixo em outro echo / apenas apertei enter antes da ultima aspas

//nomes de variáveis tem um $ na frente
$nomeFilme ="Top Gun - Maverick";

// $anoLancamento = 2022;
//CHAMADA DE $argv
//
//$anoLancamento = $argv[1] ?? 2022; //se o que estiver á esquerda do operador ?? for nulo, então vou utilizar o valor á direita


$anoLancamento = 2022;

$quantidadeDeNotas = $argc -1;

// Double ou Float - número decimal
// $notaFilme = 8.8;
// $somaDeNotas = 9 + 6 + 8 + 7.5 + 5;
$notas = [0];

for ($contador = 1; $contador < $argc; $contador ++){
    // $somaDeNotas += $argv[$contador];
    // $notas[$contador - 1] = (float) $argv[$contador];
    $notas[] = (float) $argv[$contador];

}

var_dump($notas);

// $somaDeNotas = 0;
// // for ($i = 0; $i < count($notas); $i ++){
// //  $somaDeNotas = $notas[$i];
// // }
// foreach ($notas as $nota){
//     $somaDeNotas += $nota;
// }

// do{

// } while() {

// }

// $contador = 1;
// while ($argv[$contador] != 0){
//     $somaDeNotas += $argv[$contador++];
// }

// $notaFilme = $somaDeNotas / 5;
$notaFilme = array_sum($notas) / $quantidadeDeNotas;
// 
// ou:
// $notaFilme = (9 + 6 + 8 + 7.5 + 5) / 5;
// 
// ou:
// $somaDeNotas = 9;
// $somaDeNotas = $somaDeNotas + 6;
// $somaDeNotas = $somaDeNotas + 8;
// $somaDeNotas = $somaDeNotas + 7.5;
// 
// ou só usar o += :
// $somaDeNotas += 5;
//

//booleano
$planoPrime = true; //eu só posso utilizar uma variavel depois de criá-la, pois não é assíncrono, ou seja, as variáveis precisam ser definidas ANTES DE USÁ-LAS

// $incluidoNoPlano = false;
$incluidoNoPlano = $planoPrime || $anoLancamento < 2020;

// echo "Nome do filme: ";
// echo $nomeFilme;
// echo "\nNota do filme: ";
// echo $notaFilme;
 
//concatenei dois textos
echo "Nome do filme: " . $nomeFilme . "\n";
echo "Nota do filme: $notaFilme\n";
echo "Ano de lançamento: $anoLancamento\n";

if($anoLancamento > 2022) {
    echo "Esse filme é um lançamento!\n";
} elseif($anoLancamento > 2020 && $anoLancamento <= 2022){
    echo "esse filme ainda é novo\n";
} else {
    echo "Esse filme não é um lançamento!\n";
}


$genero = match ($nomeFilme){
    "Top Gun - Maverick" => "ação",
    "Thor: Ragnarok" => "super-herois",
    "Se beber não case" => "comédia",
    default => "genero desconhecido"
};

// echo "O gênero do filme é: $genero\n";

//array associativo, com chave e valor na frente
$filme = [
    "nome" => "Thor: Ragnarok",
    "ano" => 2021,
    "nota" => 7.8,
    "genero" => "super-herói",
];

echo $filme["nome"];







// echo $argc . "\n\n";

//vai exibir os valores de uma variável e o seu tipo
// var_dump($argv);

//criar uma nova variável de notas para o filme
// $notasParaOFilme = [
//     10, 
//     8, 
//     9, 
//     7.5, 
//     5, 
//     6.8 
// ];
// var_dump($notasParaOFilme);

//método antigo de criar um array:
// $notasParaOFilme = array (
//     10, 
//     8, 
//     9, 
//     7.5, 
//     5, 
//     6.8 
// );



