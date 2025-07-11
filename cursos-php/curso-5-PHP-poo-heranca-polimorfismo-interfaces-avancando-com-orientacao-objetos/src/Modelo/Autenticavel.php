<?php 

namespace Alura\Banco\Modelo;

Interface Autenticavel
{
    public function podeAutenticar(string $senha): bool;
}

/**
 * Todas as classes que decidirem implementar uma interface precisam implementar todos os métodos nela definidos.
 * 
 * 
 * aula da alura sobre interfaces
 * https://cursos.alura.com.br/course/php-oo-heranca-polimorfirmo-interfaces/task/66033
 */