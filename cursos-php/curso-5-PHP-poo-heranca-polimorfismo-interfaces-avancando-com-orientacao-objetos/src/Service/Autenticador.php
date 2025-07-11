<?php 

namespace Alura\Banco\Service;

use Alura\Banco\Modelo\Autenticavel;
use Alura\Banco\Modelo\Funcionario\Funcionario;

class Autenticador
{
    public function tentaLogin(Autenticavel $autenticavel, string $senha): void
    {
        if($autenticavel->podeAutenticar($senha))
        {
            echo "Ok. Usuário logado no sistema";

        } else {
            echo "Ops. Senha incorreta";
        }
    }
}
