let num1 = Number(prompt("Digite um numero"))
let num2 = Number(prompt("Digite outro numero"))

function comparar() {
    if (num1 > num2) {
        console.log("O primeiro é maior")
    } else if (num2 > num1) {
        console.log("O segundo numero é maior")
    } else {
      console.log("Eles são iguais")
    }
}
comparar()