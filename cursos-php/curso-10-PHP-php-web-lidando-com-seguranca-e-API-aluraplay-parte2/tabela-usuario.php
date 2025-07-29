
 <?php
/* 
declare (strict_types= 1);

$dbPath = __DIR__ . '/banco.sqlite';
$pdo = new PDO("sqlite:$dbPath");

$pdo->exec('CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT, password TEXT);');

//>>-> esse arquivo foi usado apenas uma vez para gerar a tabela e pode ser excluido após o uso, eu o manti para fins de exemplo.