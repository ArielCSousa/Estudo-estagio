function tocaSom (idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);

    if(elemento != null && elemento.localName === 'audio'){
        // console.log(elemento.localName === 'audio');
        
        elemento.play();
    }
    else {

        console.log('Elemento não encontrado ou seletor inválido')
        
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');



// let contador = 0;

//enquanto
// while (contador < listaDeTeclas.length) {


//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];

//     //Template string
//     const idAudio = `#som_${instrumento}`;
//     // console.log(idAudio);

//     tecla.onclick = function () {
//         tocaSom(idAudio);
//     }

//     contador = contador + 1;

//     // console.log(contador);
// }


//para
for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    // console.log(contador);

    //usando função anônima para deixar as teclas músicais com outra cor quando acionadas pelo teclado
    //adicionando uma classe ao elemento quando o botão for apertado(função ativa adicionada)
    tecla.onkeydown = function (evento) {
        
        console.log(evento.code) //para asaber pela propriedade "code" qual o CODE  da tecla apertada
        
        console.log(evento.code == 'Space' || evento.code == 'Enter') //imprime no console TRUE se a tecla apertada foi espaço e FALSE se for outra tecla apertada

        //condicionais para o evento acontecer(adicionando classe css ao botão)
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    //removendo a classe adicionada anteriormente para o botão voltar a cor normal
    tecla.onkeyup = function (evento) {
        
        //condicionais para o evento acontecer(remover classe css ao botão)
        if (evento.code === "Enter" || evento.code === 'Space') {    
            tecla.classList.remove('ativa');
        }
    }
}

