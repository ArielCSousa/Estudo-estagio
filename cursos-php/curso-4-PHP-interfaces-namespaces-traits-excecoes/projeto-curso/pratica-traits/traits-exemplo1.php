<?php 

/*
    Todos os exemplos presentes nessa pasta foram retirados do site da documentação do php:

    > https://www.php.net/traits


    Exemplo #1 Exemplo de característica
*/

trait TraitA {
    public function sayHello() {
        echo 'Hello';
    }
}

trait TraitB {
    public function sayWorld() {
        echo 'World';
    }
}

class MyHelloWorld
{
    use TraitA, TraitB; // A class can use multiple traits

    public function sayHelloWorld() {
        $this->sayHello();
        echo ' ';
        $this->sayWorld();
        echo "!\n". "----Exemplo 1----";
    }
}

$myHelloWorld = new MyHelloWorld();
$myHelloWorld->sayHelloWorld();

/*
    Saída esperada:
        "Hello World :D!"
*/

