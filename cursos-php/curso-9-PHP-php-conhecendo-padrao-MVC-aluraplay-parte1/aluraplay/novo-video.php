<?php

use Alura\Mvc\Entity\Video;
use Alura\Mvc\Repository\VideoRepository;

$dbPath = __DIR__ . "/banco.sqlite";
$pdo = new PDO("sqlite:$dbPath");

$url = filter_input(INPUT_POST,'url', FILTER_VALIDATE_URL);
$titulo = filter_input(INPUT_POST, 'titulo');
if($url === false || $titulo === false){
    header('Location: /?sucesso=0');
    exit(); 
}

$repository = new VideoRepository($pdo);


// var_dump($statement->execute());
if ($repository->add(new Video($url, $titulo)) ===false ){
    header('Location: /?sucesso=0 ');
} else { 
    header('Location: /?sucesso=1'); 
}
