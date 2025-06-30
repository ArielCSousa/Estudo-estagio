<?php

class ContaCorrente extends ContaBancaria
{
    // 0.5%
    private const float TAXA_SAQUE = 0.005;

    //R$ 500
    private const float TARIFA_MENSAL = 5_00;


    public function cobrarTarifaMensal(): void
    {
        $this->saldo -= self::TARIFA_MENSAL;
    }

    #[Override]
    public function sacar(int $valorASacar): void
    {
        $saqueTotal = $valorASacar + $valorASacar * self::TAXA_SAQUE;

        if($saqueTotal > 0 && $this->saldo >= $saqueTotal)
        {
            $this->saldo -= $saqueTotal;
        }
    }


}