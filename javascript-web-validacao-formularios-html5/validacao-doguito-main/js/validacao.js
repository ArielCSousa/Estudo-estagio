
// const dataNascimento = document.querySelector('#nascimento') //passando id nascimento

// dataNascimento.addEventListener('blur', (evento) => { //dentro da função anonima
//     validaDataNascimento(evento.target)

// }) //evento blur para desfocar o campo


export function valida(input) {
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){ //se for true
        input.parentElement.classList.remove('input-container--invalido')
        //aproveitando a validação do if para acrescentar mensagens de erro no navegador direto pelo javascript
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro 
        (tipoDeInput, input)//exibir o retorno da função criada para selecionar a mensagem de erro de acordo com o campo definido no objeto mensagemDeErro
    }
}


//criando um vetor com velores de string em que cada string será um tipo de erro, para conseguimos comparar e encontrar o erro correspondente do input
const tiposDeErros = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
] //se tiver mais tipos de erros vai ser necessário acrescentar na lista para tratar


//objeto para armazenar as nossas mensagens de erro
const mensagensDeErro = {
    //considerando o campo de tipo nome do formulário
    nome: {
        valueMissing: 'O campo nome não pode estar vazio.'
    },
    //considerando o campo de email do formulário
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    //para o campo do tipo senha
    senha: {
        valueMissing: 'O campo de senha não pode estar vazio.',
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e não deve conter símbolos'
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customErros: 'Você deve ser maior de 18 anos para se cadastrar.'
    }

}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}


//função para mostrar mensagem de erro pelo javascript
function mostraMensagemDeErro(tipoDeInput, input){
    let mensagem = '' //inicio a variavel vazio para atribuir a mensagem desejada de acordo com o campo
    tiposDeErros.forEach(erro => { 
        //vamos verificar se, dentro do input validity, tem o erro, checando dentro do vetor(esperando valor true ou false)
        if(input.validity[erro]){
            //se for true
            mensagem = mensagensDeErro[tipoDeInput][erro] //identifica o input e o erro correspondente que temos dentor do array
        }
    })

    return mensagem
}


function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorQue18(dataRecebida)){
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    } //if para aparecer a mensagem acima caso o usuário seja menor de idade

    input.setCustomValidity(mensagem) 
}

function maiorQue18(data){
    const dataAtual = new Date() //deixando vazio ele entende que é pra considerar a data de hoje
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()) //ano mes e dia é a ordem que o javascript reconhece

    return dataMais18 <= dataAtual
}