// ESCRITA DE CÓDIGOS
// Ex1
// const pessoa = {
//     nome: 'Pedro',
//     apelidos: ['Pedrinho', 'Pedroca', 'Pim']
// }
// console.log(`Eu sou o ${pessoa.nome} mas pode me chmar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)


// Ex2
// const listaDeTarefas = {
//     nome: "João",
//     tarefas: [
//       { descricao: "Estudar para a prova", concluida: false, prioridade: "alta" },
//       { descricao: "Limpar o quarto", concluida: false, prioridade: "média" }
//     ]
//   }

//   listaDeTarefas.tarefas.push({ 
//     descricao: "Lavar o banheiro", 
//     concluida: false, 
//     prioridade: "baixa"
//   })

//  listaDeTarefas.tarefas[0].concluida = true

//   console.log(listaDeTarefas)





// Ex3
// function ficha() {

//     const pessoa = {
//         nome: prompt("Qual é o seu nome?"),
//         idade: Number(prompt("Qual é a sua idade?")),
//         profissao: prompt("Qual e a sua profissão?"),
//     }
//     console.log("Nome: " + pessoa.nome + "\nIdade: " + pessoa.idade + "\nProfissão: " + pessoa.profissao)
// }
// ficha()





// Ex4
// var carrinho = []

//  const fruta1 = {
//      nome: "maçã",
//      disponibilidade: true
//  }

// const fruta2 = {
//     nome: "laranja",
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "uva",
//     disponibilidade: true
// }

// carrinho.push(fruta1)
// carrinho.push(fruta2)
// carrinho.push(fruta3)

// console.log("Esse é o carrinho: ", carrinho)
// console.log("Essas são as frutas do sacolão: ", fruta1, fruta2, fruta3)



// INTERPRETANDO CODIGOS
// Ex1

// const serie = {
//     nome: "Stranger Things", 
//     ano: 2016, 
//     elenco: [
//       "Millie Bobby Brown", "Finn Wolfhard", "Gaten Matarazzo", 
//       "Caleb McLaughlin", "Sadie Sink"
//       ], 
//     episodiosHoje: [
//       {canal: "Netflix", horario: "16h"}, 
//       {canal: "HBO Max", horario: "18h"}, 
//       {canal: "Prime Video", horario: "20h"}
//       ]
//   }
  
//   console.log(serie.elenco[1]) // irá escrever Finn Wolfhard
//   console.log(serie.elenco[serie.elenco.length - 1])// irá escrever o ultimo do array no caso = Sadie Sink
//   console.log(serie.episodiosHoje[1]) // irá escrever {canal: "HBO Max", horario: "18h"} exatamente desse jeito






// Ex2
// const carro = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     ano: 2022,
//     proprietario: {
//       nome: "Carlos",
//       idade: 45,
//       habilitado: true
//     }
//   };
  
//   console.log(carro.proprietario.nome);
//   console.log(carro.proprietario.habilitado);

// a) O que vai ser impresso no console? Carlos e true

// b) Como você acessaria o modelo do carro? carro.modelo





// Ex3
// const calculadora = {
//     somar: function(a, b) {
//       return a + b;
//     },
//     subtrair: function(a, b) {
//       return a - b;
//     }
//   };
  
//   console.log(calculadora.somar(5, 3));
//   console.log(calculadora.subtrair(10, 4));



// a) O que vai ser impresso no console? 8 e 6

// b) Como você chamaria a função `somar` para adicionar os números 7 e 2? calculadora.somar(7, 2)
  
// c) Como seria as funções de multiplicar e dividir? 
// multiplicar: function(a, b) {
//     return a * b;
//   }
// };
// dividir: function(a, b) {
//     return a / b;
//   }
// };

// console.log(calculadora.multiplicar(5, 3));
// console.log(calculadora.dividir(10, 4));
 

// d) Para o que serve a palavra `return`? para retornar a soma e a subtração dos valores que foram passados como parametros



// * DESAFIOS *

// const filmes = {
// filme1: function filme(Venom3) {
//   return false
// },
// filme2: function filme(meuMalvadoFav) {
//     return true
//   }
//     }

// console.log(`Venom 3, foi lançado: ${filmes.filme1()}\nMeu Malvado Favorito , foi lançado: ${filmes.filme2()}`)


// var carrinho = []

// const fruta1 = {
//     nome: "maçã",
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "laranja",
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "uva",
//     disponibilidade: true
// }

// carrinho.push(fruta1)
// carrinho.push(fruta2)
// carrinho.push(fruta3)

// console.log("Esse é o carrinho: ", carrinho)
// console.log("Essas são as frutas do sacolão: ", fruta1, fruta2, fruta3)

// function listarCarrinho() {
//     console.log("Itens no carrinho:")
//     console.log(` ${fruta1.nome} \n${fruta2.nome} \n ${fruta3.nome}`)
// } 

// function disponivel(fruta3) {
//     fruta3.disponibilidade = !fruta3.disponibilidade
//     return fruta3.disponibilidade
// }

// listarCarrinho()
// console.log(disponivel(fruta3))






