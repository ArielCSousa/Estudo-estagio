<?php

    require "src/conexao-bd.php";
    require "src/Modelo/Produto.php";
    require "src/Repositorio/ProdutoRepositorio.php";

    $produtoRepositorio = new ProdutoRepositorio($pdo);
    $produtos = $produtoRepositorio->buscarTodos();

?>

<style>
    table{
        width: 90%;
        margin: auto 0;
    }
    table, th, td{
        border: 1px solid #000;
    }

    table th{
        padding: 11px 0 11px;
        font-weight: bold;
        font-size: 18px;
        text-align: left;
        padding: 8px;
    }

    table tr{
        border: 1px solid #000;
    }

    table td{
        font-size: 18px;
        padding: 8px;
    }
    .container-admin-banner h1{
        margin-top: 40px;
        font-size: 30px;
    }
</style>

<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <!-- <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/index.css" />
    <link rel="stylesheet" href="css/admin.css" /> -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="icon" href="img/icone-serenatto.png" type="image/x-icon" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <title>Serenatto - Conteudo do PDF</title>
  </head>

        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Tipo</th>
              <th>Descricão</th>
              <th>Valor</th>
            </tr>
          </thead>

          <tbody>
            <?php foreach ($produtos as $produto): ?>
            <tr>
              <td><?= $produto->getNome() ?> </td>
              <td><?= $produto->getTipo() ?></td>
              <td><?= $produto->getDescricao() ?></td>
              <td><?= $produto->getPrecoFormatado() ?></td>
            </tr>
            <?php endforeach; ?>
          
            </tbody>
        </table>