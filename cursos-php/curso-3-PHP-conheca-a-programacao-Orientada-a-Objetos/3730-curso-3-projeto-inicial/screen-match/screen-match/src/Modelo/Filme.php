<?php

class Filme extends Titulo
{
    private array $notas;

    public function __construct(
        string $nome,
        int $anoLancamento,
        Genero $genero,
        public readonly int $duracaoEmMinutos,
    ){
        parent::__construct($nome,$anoLancamento,$genero); 
    //  parent é tipo um 'super' do java
    }

    public function duracaoEmMinutos(): int 
    {
        return $this->duracaoEmMinutos;
    }

    // public function avalia(float $nota): void 
    // {
    //     $this->notas[] = $nota;
    // }

    // public function media(): float
    // {
    //     $somaNotas = array_sum($this->notas);
    //     $quantidadeNotas = count($this->notas);

    //     return $somaNotas / $quantidadeNotas;
    // }


// //  Método acessor/Método de acesso(tipo um getter) -> permite que eu acesse algo, como o atributo anoLancamento do filme
//     public function anoLancamento(): int 
//     {
//         return $this->anoLancamento;
//     }

//     public function nome(): string 
//     {
//         return $this->nome;
//     }

//     public function genero(): string 
//     {
//         return $this->genero;
//     }

//     public function notas(): array 
//     {
//         return $this->notas;
//     }


//  Método definidor(setter)
    // public function defineAnoLancamento(int $anoLancamento)
    // {
    //     $this->anoLancamento = $anoLancamento;
    // }
    // public function defineNome(string $nome)
    // {
    //     $this->nome = $nome;
    // }
    // public function defineGenero(string $genero)
    // {
    //     $this->genero = $genero;
    // }
    //     public function defineNotas(array $notas)
    // {
    //     $this->notas = $notas;
    // }

    //====> pude apagar pois criei o construtor


/*
*******=> Se você quiser substituir todas as notas de uma vez:
    public function defineNotas(array $notas)
    {
        $this->notas = $notas;
    }


*******=> Se quiser adicionar várias notas, uma por uma:
    public function defineNotas(array $notas)
    {
        foreach ($notas as $nota) {
            $this->avalia($nota); // reaproveitando o método avalia()
        }
    }
*/
}