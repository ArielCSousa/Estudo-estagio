<?php 

namespace Alura\Banco\Modelo;

abstract class Pessoa
{

    use AcessoPropriedades;

   protected $nome;
   private $cpf;

    public function __construct(string $nome, CPF $cpf)
    {
        $this->validaNome($nome);
        $this->nome = $nome;
        $this->cpf = $cpf;  
    }

    public function recuperaNome(): string
    {
        return $this->nome;
    }

    public function recuperaCpf(): string
    {
        return $this->cpf->recuperaNumero();
    }


    // usando FINAL no método ou classe, não é possíbel sobrescrever ele, podendo apenas utiliza-lo da forma como ele foi implementado na classe mãe
    final protected function validaNome(string $nome)
    {
        if (strlen($nome) < 5) {
            echo "Nome precisa ter pelo menos 5 caracteres";
            exit();
        }
    }

    
}