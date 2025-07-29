<?php

declare(strict_types=1);

use Alura\Mvc\Controller\Controller;
use Alura\Mvc\Controller\DeleteVideoController;
use Alura\Mvc\Controller\EditVideoController;
use Alura\Mvc\Controller\Error404Controller;
use Alura\Mvc\Controller\NewVideoController;
use Alura\Mvc\Controller\VideoFormController;
use Alura\Mvc\Controller\VideoListController;
use Alura\Mvc\Repository\VideoRepository;

require_once __DIR__ . '/../vendor/autoload.php';

$dbPath = __DIR__ . '/../banco.sqlite';
$pdo = new PDO("sqlite:$dbPath");
$videoRepository = new VideoRepository($pdo);

$routes = require_once __DIR__ . '/../config/routes.php';

$pathInfo = $_SERVER['PATH_INFO'] ?? '/';
$httpMethod = $_SERVER['REQUEST_METHOD'];

$key = "$httpMethod|$pathInfo";
if(array_key_exists($key, $routes)){

    $controllerClass = $routes["$httpMethod|$pathInfo"];


    $controller = new $controllerClass($videoRepository);
} else {
    $controller = new Error404Controller();
}
    /**
     * @var \Alura\Mvc\Controller\Controller $controller
     */
$controller->processaRequisicao();

/**
 * Usuário acessa a URL →
 * $_SERVER['PATH_INFO'] e $_SERVER['REQUEST_METHOD'] pegam o caminho e método →
 * Usa isso para encontrar a classe do controller →
 * Instancia o controller com o repositório →
 * Chama processaRequisicao() → Exibe a página ou processa os dados
 */