import { valida } from './validacao.js' //importando a função do arquivo validacao.js

const inputs = document.querySelectorAll('input') //usando a tag para selecionar os imputs

inputs.forEach(input => {

    //configurando a mascara para o campo de preço da página cadastro_produto.html
    if(input.dataset.tipo === 'preco'){
        SimpleMaskMoney.setMask(input, {
            prefix: 'R$',
            fixed: true, //prefixo fixado no campo
            fractionDigits: 2, //casas decimais
            decimalSeparator: ',', //separação de centavos
            thousandsSeparator: '.', //separação de milhas
            cursor: 'end' //os valores são inseridos do final para o começo do campo
        })
    }

    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})


