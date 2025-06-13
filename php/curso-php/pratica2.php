<?php
    // 1 - exibir numeros ímpares de 0 à 100

    // for($contador = 0; $contador <= 100 ; $contador++){
    //     if($contador % 2 != 0){
    //         echo $contador . " ";
    //     }
    // }
//==========================================================================

//==========================================================================
    // 2 - calcular imc a partir do peso e altura, exibir a classificação do imc

    // $peso = $argv[1];
    // $altura = $argv [2];
    // $classificacaoIMC = "";

    // $alturaParaCalculo = $altura * $altura;

    // $calculoIMC = $peso / $alturaParaCalculo;

    // if($calculoIMC < 18.5){
    //     $classificacaoIMC = "Abaixo do peso";
       
    // } elseif ($calculoIMC >= 18.5 && $calculoIMC <= 24.9) {
    //     $classificacaoIMC = "Peso normal (ideal)";
        
    // } elseif ($calculoIMC >= 25.0 && $calculoIMC <= 29.9) {
    //     $classificacaoIMC = "Sobrepeso";

    // } elseif ($calculoIMC >= 30.0 && $calculoIMC <= 34.9) {
    //     $classificacaoIMC = "Obesidade grau 1";

    // } elseif ($calculoIMC >= 35.0 && $calculoIMC <= 39.9) {
    //     $classificacaoIMC = "Obesidade grau 2 (severa)";

    // } elseif ($calculoIMC >= 40.0) {
    //     $classificacaoIMC = "Obesidade grau 3 (mórbida)";

    // } 

    // echo "Seu IMC é: $calculoIMC e 
    // sua classificação é: $classificacaoIMC \n";
//==========================================================================

//==========================================================================
    // 3 - exibir bom dia, boa tarde OU boa noite de acordo com o horário encontrado em uma variável (inteiro representando as horas)

    $horario = $argv[1];

    if($horario >= 5 && $horario < 12){
        echo "Bom dia!!";
    } elseif ($horario >= 12 && $horario < 18) {
        echo "Boa tarde!";
    } elseif (
        ($horario >= 18 && $horario <= 23) || 
        ($horario >= 0 && $horario < 5)) {
        echo "Boa noite!";
    } else {
        echo "Horario Inválido!";
    }
      
    



