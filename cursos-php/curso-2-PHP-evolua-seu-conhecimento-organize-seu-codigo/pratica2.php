<?php

// ====================================================================
//  1 - Escreva um programa em PHP que inicialize um array de notas e exiba somente as 3 maiores notas do array

    // $notas = [ 10, 8 , 9, 5 , 6.7, 9.5, 3];

//// Ordena de forma decrescente (r de reverso)
    // rsort($notas);

    // echo "As três maiores notas são: $notas[0], $notas[1] e $notas[2]";

// ====================================================================

// ====================================================================
// 2 - Crie um programa em PHP que transforme a string “Vinicius Dias,1997,Programador” em um array em que cada item está separado por vírgulas.

    // $texto = "Ariel Cristina, 1998, DEV Front-End";

    // var_dump(explode(',' , $texto));

     //Se quiser colocar os dados em um array associativo:

        // $texto = "Ariel Cristina, 1998, DEV Front-End";
        // $partes = array_map('trim', explode(',', $texto));

        // $dados = [
        //     'nome' => $partes[0],
        //     'ano' => $partes[1],
        //     'profissao' => $partes[2]
        // ];

        // print_r($dados);
// - - - - - - - - - - - - - - - - - - - - - 
        /* Saída:
        Array
    (
        [nome] => Ariel Cristina
        [ano] => 1998
        [profissao] => DEV Front-End
    )

        */

// ====================================================================

// ====================================================================
// 3 - Escreva uma função em PHP que receba um array de strings por parâmetro e o retorne ordenado em ordem alfabética.

    // function ordenarEmAlfabetica(array $array): array{
    //     sort($array);
    //     return $array;
    // }

    // $array = array("banana", "abacaxi", "laranja", "uva");
    // $arrayOrdenado = ordenarEmAlfabetica($array);
    // print_r($arrayOrdenado);





