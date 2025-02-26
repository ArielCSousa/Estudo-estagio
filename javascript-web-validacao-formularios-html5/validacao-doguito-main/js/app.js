import { valida } from './validacao.js' //importando a função do arquivo validacao.js

const inputs = document.querySelectorAll('input') //usando a tag para selecionar os imputs

inputs.forEach(inputs => {
    inputs.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})