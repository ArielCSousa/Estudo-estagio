<?php

// $pdo = new PDO("sqlite:banco.sqlite", $usuario, $senha, [parametros extras]); O PDO ACEITA TODOS ESSES PARAMETROS

$caminhoBanco = __DIR__ . "/banco.sqlite";
$pdo = new PDO("sqlite:$caminhoBanco");

echo "Conectei";

$pdo->exec('CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT, birth_date TEXT);');

echo "\nTabela criada\n";
