<?php 

spl_autoload_register(function (string $className) {
    $caminho = str_replace('ScreenMatch', '/src', $className) . ".php";
    $caminho = str_replace('\\', DIRECTORY_SEPARATOR, $caminho);
    
    $caminhoCompleto = __DIR__ . DIRECTORY_SEPARATOR . $caminho;

        if(file_exists($caminhoCompleto)){
            require_once $caminhoCompleto;
        }
    });

    /*
        * Implementações de autoloader não podem lançar exceções nem emitir erros de nenhum tipo e não devem retornar um valor. *

        MAS QUAL O MOTIVO DISSO? :
        - Se uma das funções não conseguir encontrar o arquivo que possui o tipo em questão, outro autoloader poderia conseguir, mas se nós geramos um erro, a interpretação do código será finalizada indevidamente.
    */