<?php

namespace ScreenMatch\Calculos;

use ScreenMatch\Modelo\Avaliavel;
use Throwable;

class ConversorNotaEstrela
{
    public function converte(Avaliavel $avaliavel): float
    {
        try{
            $nota = $avaliavel->media();

            return round( $nota)/ 2;
        } catch(Throwable $erro){
            echo $erro->getMessage();
            return 0;
        } 
    }
}

/**
 * Posso ter vários blocos de catch, onde cada um trata um tipo de erro específico, ou um único erro por bloco.
 
 * catch(Throwable){} --> é o tipo mais genérico de erro para ser usado, pois ele pega erros e exceptions
 
 * catch(Error){} --> vai pegar todos os erros possíveis, mas não pega as Exceptions 
 
 */


