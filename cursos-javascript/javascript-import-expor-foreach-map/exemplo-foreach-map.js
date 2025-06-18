const nomes = ['Teste', 'Bagulhos', 'Windows', 'Freeway'];

// // for(let i = 0; i < nomes.legth; i = i + 1){
// //     console.log(nomes[i], i);
// // }

// nomes.forEach(function(nome , i){
//     console.log(nome, i);

// })

// // nomes.map(function(nome , i){
// //     console.log(nome, i);

// // })

// function nossoForEach(array, funcao) {
//     for() {
//        funcao(itemDoArray, i) 
//     }
    
// };

// nossoForEach (nome, i) {
//     //console.log(nome, i);
// };
// ***************************************
// const retornoDoForEach = nomes.forEach(function(nome, i){
//     console.log(nome, i);
// })

// console.log(retornoDoForEach);

// const retornoDoMap = nomes.map(function(nome, i){
//     console.log(nome, i);
// })

// console.log(retornoDoMap);

function nossoMap(arr, funcao) {
    const novoArray = []
    for(let i = 0; i < arr.length; i = i + 1){
        const itemDoArray = arr[i]
        novoArray.push(funcao(itemDoArray))
    }
    return novoArray
}
