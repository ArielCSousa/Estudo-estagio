<?php

namespace Alura\Fp;

class Maybe
{
    private mixed $valor;

    public function __construct($valor)
    {
        $this->valor = $valor;
    }
    
    public static function of($valor)
    {
        return new self($valor);
    }

    public function isNothing(): bool
    {
        return $this->valor === null;
    }

    public function getOrElse($default)
    {
        return $this->isNothing() ? $default : $this->valor;
    }

    public function map(callable $fn)
    {
        if($this->isNothing()){
            return Maybe::of($this->valor);
        }
        $valor = $fn($this->valor);

        return Maybe::of($valor);
    }

}

// se trocar o null por qualquer outro numero ele vai funcionar normalmente, mas com null ele não estoura erro e retorna 0
// echo Maybe::of(null)
//     ->map(fn ($numero) => $numero * 2)
//     ->map(fn ($numero) => $numero + 10)
//     ->getOrElse(0);