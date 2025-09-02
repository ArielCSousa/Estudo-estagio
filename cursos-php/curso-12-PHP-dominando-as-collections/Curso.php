<?php

use Ds\{Stack, Queue, Set};

class Curso
{
    private Stack $alteracoes;
    private Queue $filaDeEsperaDeAlunos;
    private Set $alunosMatriculados;

    public function __construct(public string $nome)
    {
        // $this->alteracoes = new SplDoublyLinkedList();
        //
        $this->alteracoes = new Stack(); 
        // USANDO ESSE MÉTODO AS ALTERACOES IRAO APARECER EM PILHA, LIFO -> LAST IN FIRST OUT (ULTIMO A ENTRAR É O PRIMEIRO A SAIR) ASSIM AS ALTERAÇÕES RECENTES APARECEM PRIMEIRO PARA O USUARIO

        $this->filaDeEsperaDeAlunos = new Queue();

        $this->alunosMatriculados = new Set();

    }

    public function adicionaAlteracao(string $alteracao):void
    {
        $this->alteracoes->push($alteracao);
    }

    public function recuperaAlteracoes(): Stack
    {
        return $this->alteracoes->copy();
    }

    public function adicionaAlunoParaEspera(Aluno $aluno):void
    {
        $this->filaDeEsperaDeAlunos->push($aluno);
    }

    public function recuperaAlunosEsperando(): Queue
    {
        return $this->filaDeEsperaDeAlunos->copy();
    }

    public function matriculaAluno(Aluno $aluno):void
    {
        // no lugar de PUSH usaremos ATTACH que anexa um objeto(o aluno) a um conjunto 
        // $this->alunosMatriculados->attach($aluno);

        $this->alunosMatriculados->add($aluno);
    }

    public function recuperaAlunosMatriculados(): Set
    {
        return $this->alunosMatriculados->copy();
    }
}
