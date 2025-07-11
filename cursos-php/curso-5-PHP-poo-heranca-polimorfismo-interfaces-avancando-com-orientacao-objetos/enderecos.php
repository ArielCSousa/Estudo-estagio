<?php 

namespace Alura\Banco\Modelo;

require_once 'autoload.php';

$umEndereco = new Endereco(
    'Petrópolis',
    'Bairro qualquer',
    'Minha rua',
    '71B'
);

$outroEndereco = new Endereco(
    'Rio',
    'Centro',
    'Uma rua aí',
    '50'
);

$umEndereco->rua;
echo $umEndereco->bairro;
// exit();

echo $umEndereco . PHP_EOL;
echo $outroEndereco;

