<?php

namespace ScreenMatch\Modelo;

use ScreenMatch\Exception\NotaInvalidaException;

trait ComAvaliacao
{
    private array $notas = [];

    /**
     * Summary of avalia
     * @param float $nota
     * @throws NotaInvalidaException Se a nota for negativa ou menor do que 10
     * @return void
     */
    public function avalia(float $nota): void
    {
        if($nota < 0 || $nota > 10){
            throw new NotaInvalidaException();
        }
        $this->notas[] = $nota;
    }

    public function media(): float
    {
        $somaNotas = array_sum($this->notas);
        $quantidadeNotas = count($this->notas);

        return $somaNotas / $quantidadeNotas;
    }
}

/*
    TRAITS não podem ser usados como TIPO, em parâmetros por exemplo elas não funcionam.

    TRAIT é uma característica que uma classe utiliza

    Também chamamos TRAIT de HERANÇA HORIZONTAL
*/