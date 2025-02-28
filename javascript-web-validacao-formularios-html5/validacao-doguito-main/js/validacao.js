
// const dataNascimento = document.querySelector('#nascimento') //passando id nascimento

// dataNascimento.addEventListener('blur', (evento) => { //dentro da função anonima
//     validaDataNascimento(evento.target)

// }) //evento blur para desfocar o campo


export function valida(input) { //FUNÇÃO PRINCIPAL
    const tipoDeInput = input.dataset.tipo

    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){ //se for true
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
        //aproveitando a validação do if para acrescentar mensagens de erro no navegador direto pelo javascript
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)//exibir o retorno da função criada para selecionar a mensagem de erro de acordo com o campo definido no objeto mensagemDeErro
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
    nome: { //usamos o data-tipo="nome" na pagina de cadastro-produto também, e por deixar a mensagem genérica eu pude aproveitar o mesmo erro para as duas páginas!
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
        patternMismatch: 'A senha deve conter entre 6 a 12 caracteres, deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e não deve conter símbolos.'
    },
    dataNascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior de 18 anos para se cadastrar.'
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        customError: 'O CPF digitado não é válido.'
    },
    cep: {
        valueMissing: 'O campo de CEP não pode estar vazio.',
        patternMismatch: 'O CEP digitado não é válido.',
        customError: 'Não foi possível buscar o CEP.'
    },
    logradouro: {
        valueMissing: 'O campo de logradouro não pode estar vazio.'
    },
    cidade: {
        valueMissing: 'O campo de cidade não pode estar vazio.'
    },
    estado: {
        valueMissing: 'O campo de logradouro não pode estar vazio.'
    },
    preco: {
        valueMissing: 'O campo de preço não pode estar vazio.'
    }
}

//objetos
const validadores = {
    dataNascimento:input => validaDataNascimento(input),
    cpf:input => validarCPF(input),
    cep:input => recuperarCEP(input)
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

// validando data de nascimento inserida pelo usuário ***********
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


// validando cpf informado pelo usuário ***********
function validarCPF(input) {
    const cpfFormatado = input.value.replace(/\D/g, '') //pegando tudo que não for dígito no cpf e transformar em espaços em branco
    let mensagem = ''

    if(!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)){
        mensagem = 'O CPF digitado não é valido.'
    }

    input.setCustomValidity(mensagem)
}

function checaCPFRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    let cpfValido = true


    valoresRepetidos.forEach(valor => {
        if(valor == cpf){
            cpfValido = false
        }

    })


    return cpfValido
}

function checaEstruturaCPF(cpf) {
    const multiplicador = 10

    return checaDigitoVerificador(cpf, multiplicador)
}

function checaDigitoVerificador(cpf, multiplicador) {
    if(multiplicador >= 12){ //quando os dois dígitos estiverem válidos/ok ele retorna true e para a função recursiva
        return true
    }

    let multiplicadorInicial = multiplicador
    let soma = 0
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
    const digitoVerificador = cpf.charAt(multiplicador - 1)

    for(let contador = 0; multiplicadorInicial > 1; multiplicadorInicial-- ){
        soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
        contador++
    }

    if(digitoVerificador == confirmaDigito(soma)){
        return checaDigitoVerificador(cpf, multiplicador + 1)
    }

    return false
}

function confirmaDigito(soma) {
    return 11 - (soma % 11)

}
//********************************* FIM DA SESSÃO DE VALIDAÇÃO DE INFORMAÇÕES PESSOAIS *********************************

// VALIDAÇÃO DO CEP *********************************
function recuperarCEP(input) {
    const cep = input.value.replace(/\D/g, '') //queremos substituir tudo o que não for números por NADA => ''

    //fazer requisição pra API usando FETCH
    const url = `https://viacep.com.br/ws/${cep}/json/` //url da api para requisição usando o cep para uxar o endereço
    const options = {
        method: 'GET',
        mode: 'cors', //fazendo requisição entre APIs é importando deixar mode: 'cors'
        headers: {
            'content-type': 'application/json;charset=utf-8'
        }
    }

    if(!input.validity.patternMismatch && !input.validity.valueMissing){
        fetch(url,options).then(
            response => response.json()
        ).then(
            data => {
                // console.log(data)  colocamos para mostrar se o retorno da api com o cep valido estava funcionando e ver que erro dava ao colocar cep inválido
                if(data.erro){
                    input.setCustomValidity('Não foi possível buscar o CEP.')
                    return
                }
                input.setCustomValidity('')
                //************** chamando função para preencher os campos automaticamente com os dados recebidos da API
                preencheCamposComCEP(data)
                return //acaba o fetch aqui
            }
        )
    }
}

function preencheCamposComCEP(data) {
    const logradouro = document.querySelector('[data-tipo=logradouro]')
    const cidade = document.querySelector('[data-tipo=cidade]')
    const estado = document.querySelector('[data-tipo=estado]')

    logradouro.value = data.logradouro //colocando a informação no logradouro que recebemos no objeto de data
    cidade.value = data.localidade
    estado.value = data.uf //escrever da mesma forma recebemos de resposta na API(vimos com o console.log dentro da função "recuperarCEP" que está ali encima ^)
}


