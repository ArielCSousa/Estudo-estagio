<?php

declare(strict_types=1);

namespace Alura\Mvc\Controller;

class LoginController implements Controller
{
    private \PDO $pdo;

    public function __construct()
    {
        $dbPath = __DIR__ . '/../../banco.sqlite';
        $this->pdo = new \PDO("sqlite:$dbPath");
    }

     public function processaRequisicao():void
    {
        $email = filter_input(
            INPUT_POST, "email", FILTER_VALIDATE_EMAIL);
        $password = filter_input(
            INPUT_POST, "password"); 
        $sql = 'SELECT * FROM users WHERE email = ?';
        $statement = $this->pdo->prepare($sql);
        $statement->bindValue(1, $email);
        //não vamos fazer o mesmo com a senha por enquanto
        $statement->execute();

        $userData = $statement->fetch(\PDO::FETCH_ASSOC);
        $correctPassword = password_verify(
            $password, $userData['password'] ?? '');

        if($correctPassword){
            // session_start(); Como ja valido na index então posso retirar essa 
            $_SESSION['logado'] = true;
            header('Location: /');
        } else {
            header('Location: /login?sucesso=0');
        }
    }
}


