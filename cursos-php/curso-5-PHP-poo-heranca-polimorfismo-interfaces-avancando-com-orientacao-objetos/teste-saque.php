<?php 

use Alura\Banco\Modelo\Conta\{Conta, ContaPoupanca, ContaCorrente, Titular};

use Alura\Banco\Modelo\{ CPF, Endereco};

require_once 'autoload.php';

$conta = new ContaPoupanca (
    new Titular(
        new CPF('123.456.789-10'),
        'Vinicius Dias',
        new Endereco('Petrópolis', 'bairro teste', 'Rua lá', '37')
    )
);


$conta->deposita(500);
$conta->saca(100);

echo $conta->recuperaSaldo();
// Saída esperada para Conta: 395
// Saída esperada para ContaPoupanca: 397
