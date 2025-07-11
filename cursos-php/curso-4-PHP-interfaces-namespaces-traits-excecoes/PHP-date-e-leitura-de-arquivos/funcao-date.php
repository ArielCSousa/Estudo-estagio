<?php

//========== 1- mostrando apenas a data
$hoje = date('d/m/Y');

echo "\nHoje é dia: $hoje \n";

//=====================================================================
//========== 2- mostrando data e hora

/*
// Definindo o fuso horário para o horário de Brasília
date_default_timezone_set('America/Sao_Paulo');
    $agora = date('d/m/Y H:i');   
    echo "\n Data e hora atual: $agora";
*/
// opção 2:
/*
$agora = new DateTime();
echo $agora->format('d/m/Y H:i');
*/
// opção 3:
/*
$agora = new DateTime('now');
$ontem = new DateTime('yesterday');
$dia15 = new DateTime('2025-06-15');
//=====================================================================
//é necessário formatar a data para ser exibida, caso contrário dará erro
echo "\nAgora: " . $agora->format('d-m-Y H:i:s');
echo "\nAgora - Apenas Horas: " . $agora->format('H:i:s');
echo "\nAgora - Apenas Data: " . $agora->format('d-m-Y');
echo "\n";
echo "\nOntem: " . $ontem->format('d-m-Y');
echo "\nDia 15: " . $dia15->format('d-m-Y');
*/
//=====================================================================
//======= 3- se tiver uma string em outro formato e quiser criar um objeto do tipo    DateTime()   , é só utilizar o método     createFromFormat()   
/*
$formato = 'd/m/Y';
$stringDataDia15 = '15/06/2025';
$dia15 = DateTime::createFromFormat($formato, $stringDataDia15); 

// echo $dia15->format('Y-m-d');
echo $dia15->format($formato);
*/
//====================================================================
//======= 4- INTERVALO ENTRE DATAS
/*
$entrada = new DateTime('09:00');
$saida = new DateTime('18:00');
$intervalo = $saida->diff($entrada);
print_r($intervalo);
echo $intervalo->h; // horas de distancia


// $timezone = new DateTimeZone('Europe/Dublin');
$timezone = new DateTimeZone('America/Sao_Paulo');
$agora = new DateTime('now', $timezone);
print_r($agora);
// print_r(DateTimeZone::listIdentifiers()); Lista todos os fuso horários
*/
date_default_timezone_set('America/Sao_Paulo');
$umDia = new DateInterval('P1D'); // Intervalo de 1 dia
// Com DateTime:
$hoje = new DateTime();
echo $hoje->format('d/m'); // Saída 20/03
echo "\n";
$hoje->add($umDia); // Altera o valor de $hoje
echo $hoje->format('d/m'); // Saída 21/03
echo "\n";
// Com DateTimeImmutable
$hoje = new DateTimeImmutable();
echo $hoje->format('d/m'); // Saída 20/03
echo "\n";
$amanha = $hoje->add($umDia); // Não altera o valor de $hoje
echo $hoje->format('d/m'); // Saída 20/03
echo "\n";
echo $amanha->format('d/m'); // Saída 21/03
