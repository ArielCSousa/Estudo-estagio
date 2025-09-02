<?php

require_once 'Video.php';

$video1 = new Video('Aprendendo mapas');
$video2 = new Video('Aprendendo conjuntos');

// $videosAssistidos = [
//       spl_object_hash($video1) => new DateTimeImmutable(('2021-02-03')),
//       spl_object_hash($video2) => new DateTimeImmutable(('2021-02-01')),
// ];
// echo $videosAssistidos[spl_object_hash($video1)]->format('d/m/Y') . PHP_EOL;


$videosAssistidos = new SplObjectStorage();
//qualquer uma dessas duas formas é correta e aceita:
// $videosAssistidos->attach($video1, new DateTimeImmutable('2021-02-03'));
$videosAssistidos[$video1] = new DateTimeImmutable('2021-02-03');
$videosAssistidos->attach($video2, new DateTimeImmutable('2021-02-01'));

echo $videosAssistidos[$video1]->format('d/m/Y') . PHP_EOL;


