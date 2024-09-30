// let estomago = 0;

// while(estomago < 100){
//     console.log("Quero comer mais comida");
//     estomago = estomago + 10;
// }


// let numeros 
// let soma = 0

 while(numeros !== 0){
    
     numeros = Number(prompt("Digite um numero"))
     soma = soma + numeros
 }
 
 console.log(soma)


// for(let i = 0; i < 10; i++){
//     console.log(i)
// }


// const numeros = [14,67, 89, 15, 23]

// for(let i = 0; i < 5; i++){
//     const elemento = numeros[i]
//     console.log(elemento)

// }


let nums = [11,15,18,14,12,14]
let numMaior = 0

for(let i = 0; i < nums.length; i++){
    
    if(numMaior < nums[i]){
        numMaior = nums[i]
        
    }
}

        