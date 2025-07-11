<?php 

require_once 'autoload.php';

use Alura\Banco\Service\ControladorDeBonificacoes;
use Alura\Banco\Modelo\{CPF};
use Alura\Banco\Modelo\Funcionario\{ Gerente, Diretor, Desenvolvedor, EditorVideo};

$umFuncionario = new Desenvolvedor(
    'Vinicius Dias', 
    new CPF('123.456.789-10'), 
    1000
);

$umFuncionario->sobeDeNivel();

$umaFuncionaria = new Gerente(
    'Patrícia', 
    new CPF('987.654.321-01'),  
    3000
);

$umDiretor = new Diretor(
    'Ana Maria',
    new CPF('123.456.789-11'),
    5000
);

$umEditor = new EditorVideo(
    'Claudia',
    new CPF('000.111.222-33'),
    1500
);


$controlador = new ControladorDeBonificacoes();
$controlador->adicionaBonificacaoDe($umFuncionario);
$controlador->adicionaBonificacaoDe($umaFuncionaria);
$controlador->adicionaBonificacaoDe($umDiretor);
$controlador->adicionaBonificacaoDe($umEditor);


echo $controlador->recuperaTotal();
