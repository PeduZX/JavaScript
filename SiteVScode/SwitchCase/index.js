let idade = Number(prompt("Qual é a sua idade?"))

    if (idade >= 5 && idade <= 10){
        console.log("Sua categoria é INFANTIL")
    } else if (idade >= 11 && idade <= 15){
    console.log("Sua categoria é Juvenil")

    } else if (idade >= 16 && idade <= 20){
        console.log("Sua categoria é junior")

    }  else if (idade >= 21 && idade <= 25){
        console.log("Sua categoria é Profissional")
    } else {
        console.log("Você não tem categoria")
    }