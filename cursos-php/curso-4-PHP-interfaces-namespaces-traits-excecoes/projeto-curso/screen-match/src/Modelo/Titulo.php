<?php

namespace ScreenMatch\Modelo;

// implementando AVALIAVEL aqui na classe abstrata, eu não preciso implementar novamente nas classes herdeiras "Serie" e "Filme"
abstract class Titulo implements Avaliavel
{
   
    use ComAvaliacao;
    // o php ´pega tudo que tem dentro dessa trait COMAVALIACAO e vai "COPIAR" aqui dentro dessa classe TITULO, asssim tenho acesso aos metodos e atributos declarados em COM AVALIACAO
    public function __construct(
        public readonly string $nome,
        public readonly int $anoLancamento,
        public readonly Genero $genero,
    ) {
        $this->notas = [];
    }

    abstract public function duracaoEmMinutos(): int;
}