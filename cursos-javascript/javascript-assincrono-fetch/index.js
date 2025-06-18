const apiUrl = 'http://localhost:5000/clientes'
const clientes = [{nome: 'teste', cpf: '00000000000'}]
const listaClientes = document.querySelector('#clientes')

fetch(apiUrl)
// then caso dê certo
    .then(dados => dados.jason())
    .then(resposta => {
        //colocamos o forEach dentro do then para ele só acontecer junto com o fetch>then e não antes do fetch, pois o javascript é assincrono e executa varias funções ao mesmo tempo, se deixar o forEach fora o innerHTML não exibirá a lista completa, isso só acontecerá no fetch>then
        resposta.forEach(cleinte => listaClientes.innerHTML += (`<li>nome: ${clientes.nome} cpf: ${clientes.cpf}</li>`))
    })
    // catch caso dê erro
    .catch(resposta => listaClientes.innerHTML = "<p>erro</p>")
// clientes.forEach(cliente =>
//     listaClientes.innerHTML += ('<li>nome: ${cliente.nome} cpf: ${cliente.cpf}<li>')
// )