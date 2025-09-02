<?php

require_once 'Curso.php';
require_once 'Aluno.php';

$curso = new Curso('Collection com PHP');
$curso->adicionaAlteracao('Primeira aula criada');
$curso->adicionaAlteracao('Segunda aula modificada');
$curso->adicionaAlteracao('Terceira aula concluída');

//var_dump(isset($curso->recuperaAlteracoes()[2])); //devolve bool(true)

foreach ($curso->recuperaAlteracoes() as $alteracao) {
    echo $alteracao . PHP_EOL;
}
echo '------------------ Lista de Espera ----------------------' . PHP_EOL;

$patricia = new Aluno('Patricia Freitas');

$curso->adicionaAlunoParaEspera($patricia);
$curso->adicionaAlunoParaEspera(new Aluno('Vinicius Dias'));
$curso->adicionaAlunoParaEspera(new Aluno('Ana Maria'));

foreach ($curso->recuperaAlunosEsperando() as $aluno) {
    // echo $aluno . PHP_EOL; 
    echo $aluno->nome . PHP_EOL;
}



$curso->matriculaAluno($patricia);
$curso->matriculaAluno(new Aluno('Rogério'));
$curso->matriculaAluno($patricia);

echo '------------------ Alunos Matriculados ----------------------' . PHP_EOL;


foreach ($curso->recuperaAlunosMatriculados() as $aluno) {
    // echo $aluno .  PHP_EOL;
    echo $aluno->nome . PHP_EOL;
}
echo '----------------------------------------' . PHP_EOL;


// checar se a patricia está matriculada
$patriciaEstaMatriculada = $curso->recuperaAlunosMatriculados()->contains($patricia);
var_dump($patriciaEstaMatriculada); //retorno bool(true)
