<?php 

require 'autoload.php';
use ScreenMatch\Calculos\ConversorNotaEstrela;
use ScreenMatch\Exception\NotaInvalidaException;
use ScreenMatch\Modelo\Episodio;
use ScreenMatch\Modelo\Genero;
use ScreenMatch\Modelo\Serie;

$serie = new Serie('nome da serie', 2024, Genero::Acao, 7, 20, 30);
$episodio = new Episodio($serie, 'piloto', 1);
// $episodio->avalia(10); 
    try {
        $episodio->avalia(45);
        $episodio->avalia(-35);


        $conversor = new ConversorNotaEstrela();
        echo $conversor->converte($episodio);
    } catch(NotaInvalidaException $e){
        echo "Um problema aconteceu: " . $e->getMessage();
    }       


