<?php 

/**
 * No codigo usado abaixo como exemplo a mensagem "Finalizou" se repete pois precisa ser exibida independente de existir um erro ou não.
 * 
        try {
        funcaoQuePodeLancarExcecao();
        echo "Executou";

        echo "Finalizou!";
        } catch (\Exception) {
        echo "Deu erro!";

        echo "Finalizou!";
        }

 * Para não existir repetição de código, utilizamos FINALLY após o catch para quando terminar o try-catch ele FINALMENTE exibir a mensagem, independente de ter erro ou não
 
 */

    try {
    // funcaoQuePodeLancarExcecao(); função não criada
    echo "Executou";
    } catch (\Exception) {
    echo "Deu erro!";
    } finally {
    echo "Finalizou!";
    }

