<?php

class Serie extends Titulo
{
    private array $notas;

    public function __construct(
        string $nome,
        int $anoLancamento,
        Genero $genero,
        public readonly int $temporadas,
        public readonly int $episodiosPorTemporada,
        public readonly int $minutosPorEpisodio,
    ){
        parent::__construct($nome,$anoLancamento,$genero);
    }

    public function duracaoEmMinutos(): int 
    {
        return $this->temporadas * $this->episodiosPorTemporada * $this->minutosPorEpisodio;
    }
    
}