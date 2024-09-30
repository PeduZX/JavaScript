let pais = prompt("Digite sua nacionalidade")

switch(pais){
    case 'Brasil':
        console.log("VOCÊ  É BRASILEIRO")
        break
    case 'EUA':
        console.log("Você é Norte Americano")
        break
    case 'Inglaterra':
        console.log("Você é Inglês")
        break
        default:
        console.log("Nacionalidade não encontrada!")
        break
}