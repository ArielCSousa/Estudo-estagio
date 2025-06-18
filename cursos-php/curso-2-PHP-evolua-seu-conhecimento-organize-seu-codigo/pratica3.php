<?php

//===================================================================
// 1 - abrir um arquivo chamado teste.tst para ler a primeira linha e depois fecha-lo
    // $arquivo = fopen('teste.txt', 'r');
    // $primeiraLinha = fgets($arquivo);
    // fclose($arquivo);

    // echo $primeiraLinha;
//===================================================================

//===================================================================
// 2 - abra o arquivo teste.txt, acrescente a frase "PHP é incrível!" no final do arquivo e depois o feche.

    // $nomeArquivo = 'teste.txt';
    // $novaFrase = "\nPHP é incrível!"; //usando aspas duplas "" para reconhecer o \n

    // // Abrindo o arquivo para escrever no final
    // $arquivo = fopen($nomeArquivo, 'a');
    // // Escrevendo no arquivo
    // fwrite($arquivo, $novaFrase);
    // //Fechando o arquivo
    // fclose($arquivo);
    // // Lê o arquivo todo com a nova frase
    // $conteudo = file_get_contents($nomeArquivo);

    // echo $conteudo;
//===================================================================

//===================================================================
// 3 - Converter string '{"nome":"Vinicius","anoNascimento":1997,"profissao":"Dev"}' em um objeto

// $jsonString = '{"nome":"Vinicius","anoNascimento":1997,"profissao":"Dev"}';

// //Transformando a string JSON em objeto
// $objeto = json_decode($jsonString);

// var_dump($objeto);
// echo "\n";000
// //ou
// echo $objeto->nome;
// echo "\n";
// echo $objeto->anoNascimento;
// echo "\n";
// echo $objeto->profissao;
// echo "\n\n";


/*
RESOLUÇÃO DO PROFESSOR:

    $stringJson = '{"nome":"Vinicius","anoNascimento":1997,"profissao":"Dev"}';

    var_dump(json_decode($stringJson, true));

*/



