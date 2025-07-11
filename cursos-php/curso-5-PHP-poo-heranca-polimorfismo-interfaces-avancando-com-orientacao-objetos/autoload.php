<?php 

spl_autoload_register(function(string $nomeCompletoDaClasse){
    //estou trocando o namespace inicial que criei por 'src' para reconhecer o diretorio das minhas classes
    $caminhoDoArquivo = str_replace('Alura\\Banco', 'src', $nomeCompletoDaClasse);

    // aqui eu mudo as duas barras pelo caractere responsável por separar os diretórios, que pode ser diferente em cada SO, então com essa função DIRECTORY_SEPARATOR o php ajuda a gente a separar de forma segura.
    $caminhoDoArquivo = str_replace('\\', DIRECTORY_SEPARATOR, $caminhoDoArquivo);

    // aqui adiciono o final do caminho do arquivo como .php para o php reconhecer meu arquivo e conseguir utilizar/chamar ele quando necessário.
    $caminhoDoArquivo .= '.php';

    //para visualizar melhor o que fizemos e ver o caminho do arquivo:
        // echo $caminhoDoArquivo;
        // exit();

        if (file_exists($caminhoDoArquivo)) 
        {
            require_once $caminhoDoArquivo;
        }
});
