<?php

/**
 * Exemplo nº 3 Exemplo de ordem de precedência alternativa
 */
trait HelloWorld {
    public function sayHello() {
        echo 'Hello World!';
    }
}

class TheWorldIsNotEnough {
    use HelloWorld;
    public function sayHello() {
        echo 'Hello Universe!' . "\n----Exemplo 3----";
    }
}

$o = new TheWorldIsNotEnough();
$o->sayHello();