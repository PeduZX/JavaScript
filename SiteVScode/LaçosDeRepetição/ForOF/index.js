// percorre vetores

// const numeros = [14,67, 89, 15, 23]

// for(let numero of numeros)

// console.log(numero)



// nesse código abaixo ele pega as palavras no vetor e tira a quebra de linha
const frase = ["Oi", "sumido", "tudo", "bem?", "Saudades!"]
let ordem = " "

    for(let palavras of frase){
  ordem += palavras + " "
    }

    console.log(ordem) // Oi sumido tudo bem? Saudades! 

   