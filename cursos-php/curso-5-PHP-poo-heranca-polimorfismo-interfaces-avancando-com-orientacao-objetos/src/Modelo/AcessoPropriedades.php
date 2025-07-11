<?php 

namespace Alura\Banco\Modelo;

trait AcessoPropriedades
{
 public function __get(string $nomeAtributo)
    {
        // recuperaRua->recuperaRua
        $metodo = 'recupera' . ucfirst($nomeAtributo);
        // ucfirst: "upper case first" -> primeira letra maiúscula
        // echo $metodo; exit();
        return $this->$metodo();
    }
}

