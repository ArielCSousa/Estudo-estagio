<?php 

namespace ScreenMatch\Modelo;

interface Avaliavel
{
    public function avalia(float $nota): void;
    public function media(): float;
}

/*
    As interfaces são basicamente classes abstratas com todos os métodos abstratos, ou seja, interfaces não possuem nenhuma implementação. Sendo assim, mesmo que duas interfaces herdem de uma interface em comum e assim possuam um mesmo método, uma classe que implementar ambas as interfaces vai precisar implementar esse método, ou seja, não há confusão sobre qual método seria herdado já que necessariamente a implementação sempre vai ser sobrescrita.
*/