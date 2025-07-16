<?php

// $pdo = new PDO("sqlite:banco.sqlite", $usuario, $senha, [parametros extras]); O PDO ACEITA TODOS ESSES PARAMETROS

$caminhoBanco = __DIR__ . "/banco.sqlite";
$pdo = new PDO('sqlite:'. $caminhoBanco);

echo "Conectei";

// $pdo->exec('CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT, birth_date TEXT);');

// echo "\nTabela criada\n";

$createTableSql = '
    CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY,
        name TEXT,
        birth_date TEXT
    );

    CREATE TABLE IF NOT EXISTS phones (
        id INTEGER PRIMARY KEY,
        area_code TEXT,
        number TEXT,
        student_id INTEGER,
        FOREIGN KEY(student_id) REFERENCES students(id)
    );

';

$pdo->exec($createTableSql);
