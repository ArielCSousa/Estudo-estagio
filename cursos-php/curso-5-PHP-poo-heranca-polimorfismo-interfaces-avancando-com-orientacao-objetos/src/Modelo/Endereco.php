<?php

namespace Alura\Banco\Modelo;

/**
 * Class Endereco
 * @package Alura\Banco\Modelo
 * @property-read string $cidade
 * @property-read string $bairro
 * @property-read string $rua
 * @property-read string $numero
 */

class Endereco
{
    use AcessoPropriedades;
    private $cidade;
    private $bairro;
    private $rua;
    private $numero;

    public function __construct(string $cidade, string $bairro, string $rua, string $numero) {
        $this->cidade = $cidade;
        $this->bairro = $bairro;    
        $this->rua = $rua;  
        $this->numero = $numero;
    }

    public function recuperaCidade(): string {
        return $this->cidade;
    }   

    public function recuperaBairro(): string {
        return $this->bairro;
    }

    public function recuperaRua(): string {
        return $this->rua;
    }   

    public function recuperaNumero(): string {
        return $this->numero;
    }

    public function __tostring(): string
    {
        return "{$this->rua}, {$this->numero}, {$this->bairro}, {$this->cidade}";
    }

    // public function __get(string $nomeAtributo)
    // {
    //     // recuperaRua->recuperaRua
    //     $metodo = 'recupera' . ucfirst($nomeAtributo);
    //     // ucfirst: "upper case first" -> primeira letra maiúscula
    //     // echo $metodo; exit();
    //     return $this->$metodo();
    // }

    public function __set( $nomeAtributo,  $dadoAtualizado)
    {
            // Lista de atributos que são permitidos para alteração
        $atributosPermitidos = ['cidade', 'bairro', 'rua', 'numero'];

        // Verifica se o atributo é permitido
        if (in_array($nomeAtributo, $atributosPermitidos)) {
            // Atribui o novo valor ao atributo
            $this->$nomeAtributo = $dadoAtualizado;
        } else {
            // Caso tentem alterar um atributo que não existe, mostra aviso
            echo "Atributo '$nomeAtributo' não pode ser alterado.";
        }
    }

}