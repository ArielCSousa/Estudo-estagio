<?php

use Alura\Mvc\Entity\Video;
use Alura\Mvc\Repository\VideoRepository;

$dbPath = __DIR__ . '/banco.sqlite';
$pdo = new PDO("sqlite:$dbPath");


$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
if($id === false || $id === null){
    header('Location: /?sucesso=0');
    exit();
}


$url = filter_input(INPUT_POST,'url', FILTER_VALIDATE_URL);
$titulo = filter_input(INPUT_POST, 'titulo');
if($url === false || $titulo === false){
    header('Location: /?sucesso=0');
    exit(); 
}


// $sql = 'UPDATE videos SET url = :url, title = :title WHERE id = :id;';
// $statement = $pdo->prepare($sql);
// $statement->bindValue(':url', $video->url);
// $statement->bindValue(':title', $video->title);
// $statement->bindValue(':id', $video->id, PDO::PARAM_INT);   
$video = new Video($url, $titulo);
$video->setId($id);

$repository = new VideoRepository($pdo);
$repository->update($video);


if($repository->update($video) === false){
    header('Location: /?sucesso=0');
}else{
    header('Location: /?sucesso=1');
}

    