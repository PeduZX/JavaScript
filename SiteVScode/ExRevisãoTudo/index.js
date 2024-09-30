// let num1 = Number(prompt("Digite um numero"))
// let num2 = Number(prompt("Digite outro numero"))
// let num3 = Number(prompt("Digite e mais um numero"))
// let media = (num1 + num2 + num3) / 3

// console.log("Essa é a média: ", media)

// let altura = Number(prompt("Digite sua altura: "))
// let alturaConta = (72.7*altura) - 58

// console.log("Esse é seu peso ideal: ", alturaConta)

// let QuantoGanha = Number(prompt("Quanto você ganha por hora? "))
// let horasTrabalhadas = Number(prompt("Quantas horas você trabalha? "))
// let calc = QuantoGanha * horasTrabalhadas * 23

// console.log(`Você ganha por mês: ${calc}`)


// let vidaPerso = Number(prompt("Digite a quantidade de vida: "))
// let dano = Number(prompt("Quanto o personagem tomou de dano: "))
// let conta = vidaPerso - dano

//     if(conta > 0){
//         console.log("Ele ainda não morreu!")

//     } else{
//         console.log("Ele morreu")
//     }

// let num1 = Number(prompt("Digite a nota 1"))
// let num2 = Number(prompt("Digite a nota 2"))

//  let media = (num1 + num2)/2

//  if(media >= 7 && media < 10){
//      console.log("aprovado")
//  } else if(media  == 10){
//      console.log("Aprovado com Distinção")
//  } else {
//      console.log("Reprovado")
//  }

// let num1 = Number(prompt("Digite um número"));
// let num2 = Number(prompt("Digite outro número"));
// let num3 = Number(prompt("Digite mais outro número"));

// if (num1 > num2 && num1 > num3) {
//     console.log("O número 1 é o maior");
// } else if (num2 > num1 && num2 > num3) {
//     console.log("O número 2 é o maior");
// } else if (num3 > num1 && num3 > num2) {
//     console.log("O número 3 é o maior");
// }

// if (num1 < num2 && num1 < num3) {
//     console.log("O número 1 é o menor");
// } else if (num2 < num1 && num2 < num3) {
//     console.log("O número 2 é o menor");
// } else if (num3 < num1 && num3 < num2) {
//     console.log("O número 3 é o menor");
// }
 

// let usuario = prompt("Digite o seu usuario: ")
// let senha = prompt("Digite sua senha: ")
// let senhaMinusculo = senha.toLowerCase()
// let usuarioMinusculo = usuario.toLowerCase()

// console.log("Esse é seu usuario minusculo: ", usuarioMinusculo)
// console.log("Essa é a sua senha minusculo: ", senhaMinusculo)

// let frase = prompt("Escreva uma frase")
// let novaFrase = frase.replaceAll("a", "x").replaceAll("o", "x")
 
 
// console.log(novaFrase);
 
 
 
// let email = prompt("Digite seu email: ")
//  console.log(email.trim())
 
 
 
// let nums
// let valor = 0
// let media
 
// for (let i = 0; i < 5; i++) {
//     nums = Number(prompt("Digite um número:"));
//     valor += nums
// }
 
// media = valor / 5
 
// console.log(`Soma: ${valor}`);
// console.log(`Média: ${media}`);
 
 
 
 
 
// for (let i = 0; i < 50; i++) {
//    if(i % 2){
//     console.log(i)
 
//    }  
//  }
 
// let senha
 
// while(senha != 12345){
//     senha = Number(prompt("Digite a senha:"))
 
//     if(senha != 12345){
//     console.log("Errou, tente denovo!!")
 
// } else if(senha === 12345){
//     console.log("Acertou a senha!!")
//     }
// }
   
 
// const notas = []
// let media
// let valor = 0
 
// for (let i = 0; i < 4; i++) {
//         notas[i] = Number(prompt("Digite um número:"))
//         valor += notas[i]
// }
// media = valor / 4
 
//     console.log(`essas são suas notas ${notas} e essa sua média: ${media}`)
 
 
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 
// const arrayPares = []
// const arrayImpares = []
//  for (const valor of nums) {
//      if (valor % 2 === 0) {
//          arrayPares.push(valor)
     
//         } else if(valor % 2 != 0){
//             arrayImpares.push(valor)
//         }
//     }
 
 
//     console.log(`Esse é o primeiro array: ${nums}`)
//     console.log(`Esse é o array de numeros pares: ${arrayPares}`)
//     console.log(`Esse é o array de numeros impares: ${arrayImpares}`)
 
 
//  const vetor = [];
 
//  for (let i = 0; i < 10; i++) {
//      let numero = Number(prompt(`Digite o número ${i+1}:`));
//      vetor.push(numero);
//  }
 
// // Ordenar o vetor em ordem crescente
//  vetor.sort((a, b) => a - b);
 
//  console.log("Vetor ordenado:", vetor);

//OU

// let arr = [9,6,12,2,4,5,8,10,1,13]

// let n = arr.length;

// for(let i = 0; i < n - 1; i++){
//     for(let j = 0; j < n - i - 1; j++){
//         if(arr[j] > arr[j + 1]){

//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp

//         }
//     }
// }
//     console.log(arr)



