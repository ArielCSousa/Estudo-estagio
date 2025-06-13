<?php

//====================================================
    //exemplo de entrada do usuário sendo usada
    //      echo "Digite um número : \n";
    //      $numero = fgets(STDIN);
    //      echo "O número é: $numero\n";
//====================================================
$conta = [
    "titular" => "Ariel",
    "saldo" => 1000.00
];
echo "\n****************************************" . "\nTitular: " . $conta["titular"] . " \nSaldo atual:  " . $conta["saldo"] . "\n****************************************\n";

$operacoes = [
    "Consultar saldo atual",
    "Sacar valor",
    "Depositar",
    "Sair"
];


do{
    echo "\nEscolha uma das opções abaxo: \n";
    for ($i = 0 ; $i < count($operacoes) ; $i++){
    echo ($i + 1) . "." . $operacoes[$i] . "\n";
}
echo "Opção: ";
// ENTRADA DO USUÁRIO AQUI:
$operacao = (int)fgets(STDIN);

    switch ($operacao){

        case 1:
            echo "\n****************************************\n" . "Saldo atual: R$ " . number_format((float)$conta["saldo"], 2, ',', '.') . "\n****************************************\n";
            break;

        case 2:
            echo "\n****************************************\n" ."Digite o valor de saque: R$";
            $valorSaque = (float)fgets(STDIN);
            echo "\n";

            if($valorSaque > 0 && $valorSaque <= $conta["saldo"]){
                $conta["saldo"] -= $valorSaque;
                echo "Saque realizado com sucesso.\n";
                echo "****************************************\n";
            } else{
                echo "Valor inválido ou saldo insuficiente.\n";
                echo "****************************************\n";
            }
            break;

        case 3:
            echo "\n****************************************\n" . "Digite o valor de Depósito: R$ ";
            $valorDeposito = (float)fgets(STDIN);
            echo "\n";

            if($valorDeposito > 0){
                $conta["saldo"] += $valorDeposito;
                echo "Depósito realizado com sucesso.\n";
                echo "****************************************\n";
            } else {
                echo "Valor inválido.\n";
                echo "****************************************\n";
            }
            break;

        case 4:
            echo "****************************************\n";
            echo "Até mais " . $conta["titular"] . "! :)";
            echo "\n****************************************\n";   break;

        default:
            echo "****************************************\n";
            echo "Opção inválida! Tente novamente.\n";
            echo "****************************************\n";
                
        }


} while($operacao != 4);