
<!-- 
 <h1>Sucesso! Filme < ?= htmlspecialchars($_GET['filme']) ?> inserido.</h1> 
-->

<!-- <h1>Sucesso! Filme < ?php echo $_GET['filme']; ?> inserido.</h1> -->



<?php

$conteudoArquivoJson = file_get_contents('filme.json');
$filme = json_decode($conteudoArquivoJson, true);

?>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css" />
    <title>Filme inserido</title>
</head>
<body>
    <h1 class="titulo">Título do filme: <?= $filme['nome']; ?></h1>
    <dl>
        <dt class="titulo" >Ano de lançamento</dt>
        <dd class="conteudo"><?= $filme['anoLancamento']; ?></dd>

        <dt class="titulo"  >Nota</dt>
        <dd class="conteudo"><?= $filme['nota']; ?></dd>

        <dt class="titulo "  >Gênero</dt>
        <dd class="conteudo"><?= $filme['genero']; ?></dd>
    </dl>

    
</body>
</html>

<!-- 
🏷️ Tags <dt> e <dd>
Essas tags são usadas dentro da tag <dl> para criar listas de definição ou descrição.

✅ Explicação de cada uma:
Tag	     |   Significado	          |       Função no HTML
<dl>	 | Description List	          | Inicia uma lista de descrições
<dt>	 | Description Term	          | Define o "título" ou termo a ser 
         |                            | descrito (ex: Nota)
<dd>	 | Description Definition	  | Define o "valor" ou a descrição daquele termo


🎯 Quando usar?
Use listas de descrição quando quiser apresentar pares de chave e valor de forma organizada, como:

Dados de um filme

Informações de um usuário

Ficha técnica de um produto

-->