#!usr/bin/env php
<?php 

require 'vendor/autoload.php';

use Alura\BuscadorDeCursos\Buscador;
use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;

$client = new Client(['base_uri' => 'https://www.alura.com.br/']);
$crawler = new Crawler();


$buscador = new Buscador($client, $crawler);
$cursos = $buscador->buscar('/cursos-online-programacao/php');


foreach ($cursos as $curso) 
{
    exibeMensagem($curso);
}



/**
 * > FORMA INICIAL DO NOSSO CÓDIGO NO CURSO:
 *
 * $client = new Client();
 *   $resposta = $client->request('GET', 'https://alura.com.br/cursos-online-programacao/php');
 *   
 *   $html = $resposta->getBody();
 *   
 *   $crawler = new Crawler();
 *   $crawler->addHtmlContent($html);
 *   
 *   $cursos = $crawler->filter('span.card-curso__nome');
 *   
 *   foreach ($cursos as $curso){
 *       echo $curso->textContent . PHP_EOL;
 *   }
 * 
 *     
*/

