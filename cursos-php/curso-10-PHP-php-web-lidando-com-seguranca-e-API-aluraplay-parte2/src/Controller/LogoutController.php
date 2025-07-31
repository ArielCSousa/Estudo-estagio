<?php

declare(strict_types=1);

namespace Alura\Mvc\Controller;

class LogoutController implements Controller
{

    public function processaRequisicao(): void
    {
        // session_destroy(); usar essa opção comentada não é o mais indicado, a documentação do php informa melhor sobre isso, então po rrecomendação do instrutor do curso vou deixar essas duas linhas que tornan a sessão 'logado' como FALSE
        $_SESSION['logado'] = false;
        unset($_SESSION['logado']);
        header('Location: /login');
    }
}