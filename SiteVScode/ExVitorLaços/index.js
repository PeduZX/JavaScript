//Ele ira pegar os numeros de 0 a 5 e irá lhes somar, tendo o resultado = 10
 
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
 
 
// O laço for OF irá percorrer o array e cada vez que ele percorrer o array
//e o numero que estiver nele ser maior que 18 irá exibir-lo
// Caso eu queira acessar cada um deles eu preciso usar o laço FOR
 
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
//      console.log(numero)
//         }
//     }
 
 
//Se o usurio digitar 4 iria aparecer a seguinte mensagem:
//*
//**
//***
//****
//
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
 
 
//Ex: 1
// let numDeBichos = Number(prompt("Quantos bichinhos você têm? "))
// const nomeBichos = []
 
 
// if(numDeBichos === 0){
//     console.log("Que pena! Você pode adotar um pet!")
 
// } else if(numDeBichos > 0){
//     for(let i = 0; i < numDeBichos; i++){
//         nomeBichos[i] = prompt("Escreva o nome dos seus animais: ")
// }
//     console.log("Esses são os nomes dos seus bichinhos: ", nomeBichos)
// }
 
//Ex: 2
// const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
// console.log("Valores do array original:");
// for (const valor of arrayOriginal) {
//     console.log(valor);
// }
 
// console.log("\nValores do array original divididos por 10:");
// for (const valor of arrayOriginal) {
//     console.log(valor / 10);
// }
 
// const arrayPares = [];
// for (const valor of arrayOriginal) {
//     if (valor % 2 === 0) {
//         arrayPares.push(valor);
//     }
// }
// console.log("\nNúmeros pares do array original:");
// console.log(arrayPares);
 
 
// const arrayStrings = [];
// for (const [indice, valor] of arrayOriginal.entries()) {
//     arrayStrings.push(`O elemento do índice ${indice} é: ${valor}`);
// }
// console.log("\nArray de strings formatadas:");
// console.log(arrayStrings);
 
// let maiorNumero = arrayOriginal[0];
// let menorNumero = arrayOriginal[0];
 
// for (const valor of arrayOriginal) {
//     if (valor > maiorNumero) {
//         maiorNumero = valor;
//     }
//     if (valor < menorNumero) {
//         menorNumero = valor;
//     }
// }
 
// console.log(`\nO maior número é: ${maiorNumero}`);
// console.log(`O menor número é: ${menorNumero}`);
 
// let numEsco = Number(prompt("Digite um numero para o outro participante acertar: "))
// let contador = 0;
 
// console.log("Vamos jogar!")
 
// while(numEsco != numPart){
//     var numPart = Number(prompt("Tente acertar o numero"))
//     if(numEsco === numPart){
//         contador++
//         console.log("O número chutado foi:", numPart)
//         console.log("Acertou!!")
 
//     } else if(numPart > numEsco){
//         console.log("O número chutado foi:", numPart)
//         console.log("Errrrrrrrou, é menor")
//         contador++
 
//     } else if(numPart < numEsco){
//         console.log("O número chutado foi:", numPart)
//         console.log("Errrrrrrrou, é maior")
//         contador++
//     }
 
// }
//     console.log(`Esse foi o numero de tentativas ${contador}`)
 
 
// const numEsco = Math.floor(Math.random() * 100) + 1
// let contador = 0;
 
// console.log("Vamos jogar!")
 
// while(numEsco != numPart){
//     var numPart = Number(prompt("Tente acertar o numero"))
//     if(numEsco === numPart){
//         contador++
//         console.log("O número chutado foi:", numPart)
//         console.log("Acertou!!")
 
//     } else if(numPart > numEsco){
//         console.log("O número chutado foi:", numPart)
//         console.log("Errrrrrrrou, é menor")
//         contador++
 
//     } else if(numPart < numEsco){
//         console.log("O número chutado foi:", numPart)
//         console.log("Errrrrrrrou, é maior")
//         contador++
//     }
 
// }
//     console.log(`Esse foi o numero de tentativas ${contador}`)
 
    //foi fácil fazer esta alteração? No começo não mas dps foi muito facil
    //O que você poderia ter feito para que fosse mais fácil? Deixe comentários no seu código
    // eu poderia ter descobrido antes que o math random não precisa ser necessariamente uma função mas sim uma variavél




const arrayOriginal = [1, 2, 3, 4, 5, 6];
let novoArray = [];
let stringsFormatadas = [];
let numMaior = arrayOriginal[0]; 
let numMenor = arrayOriginal[0]

for (let ordem of arrayOriginal) {
    console.log(ordem);
    console.log(`Esses valores são as divisões do 10: ${ordem / 10}`);
    
    if (ordem % 2 === 0) {
        novoArray.push(`Esse é o array formado por somente números pares: ${ordem}\n`);
    }
}

// Criar strings formatadas para cada elemento do arrayOriginal
for (let i = 0; i < arrayOriginal.length; i++) {
    stringsFormatadas.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}\n`);
}

// Encontrar o maior número no arrayOriginal
for (let i = 0; i < arrayOriginal.length; i++) {
    if (arrayOriginal[i] > numMaior) {
        numMaior = arrayOriginal[i];
    }
}

console.log(`Esse é o maior número do array: ${numMaior}`);
console.log(`Esse é o menor número do array: ${numMenor}`);


console.log(novoArray.join('')); 

console.log(stringsFormatadas.join('')); 
