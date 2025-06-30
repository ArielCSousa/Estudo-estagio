<?php

class ContaBancaria
{
    private int $saldo;

    public function sacar(int $valorASacar): void
    {
        if($valorASacar > 0 && $this->saldo >= $valorASacar){

            $this->saldo -= $valorASacar;
        } else {
            echo "\n Valor inválido ou saldo insuficiente.";
        }
    }

    public function depositar(int $valorADepositar): void
    {
        if($valorADepositar > 0)
        {
            $this->saldo += $valorADepositar;
        }   
    }

    public function consultarSaldo(): float
    {
        return $this->saldo;
    }

}