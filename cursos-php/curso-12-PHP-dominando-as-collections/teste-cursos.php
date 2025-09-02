<?php

$cursos = [
    'Introdução ao PHP',
    'DDD com PHP',
    'Coleções em PHP'
];

$cursos[] = 'Arrays em PHP'; //adicionando um item no final do array

//com --> array_push  eu consigo adicionar vários valores de uma vez só
        // array_push($cursos, 
        // 'orientação a Objetos', 
        // 'Object Calisthenics com PHP'
        // );

$cursosOo = [
    'orientação a Objetos', 
    'Object Calisthenics com PHP'
];


// função que junta dois array --> array_merge
$novoArray = array_merge($cursos, $cursosOo);

// adicion ano início do array --> unshift 
array_unshift($novoArray, 'Instalando PHP');

// mode a lista para a esquerda, removendo o primeiro índice e trazendo os demais para a posições da frente
//pegar o primeiro
// $intro = array_shift($novoArray);

//pegar último elemento e manter o restante intacto --> array_pop 
// $pop = array_pop($novoArray);



// var_dump($cursos);
var_dump( $novoArray);
