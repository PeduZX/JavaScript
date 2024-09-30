// const pessoa = {        // {} = objeto e [] = array
//     nome: 'Pedro',
//     sobrenome: "Farenzena",
//     idade: "16", // armazeno como texto porque não vou usar para calcular
//     genero: "masculino",
//     listaComidas: ["batata","Queijo"],
//     hobbie: function(params){ //função anonima
//         console.log(`Eu gosto de jogar ${params}`)
//     }
// }
 
// console.log(`Esse é o meu nome: ${pessoa.nome} ${pessoa.sobrenome} e essa minha idade: ${pessoa.idade}`)
// pessoa.hobbie("Volei")
 
 
// const filme = {
//     nome: "Top Gun Maverick",
//     anoDeLancamento: "2022",
//     diretor: "Joseph Kosinski",
//     elenco: ["Tom Cruise"," Miles Teller"," Val Kilmer"," Glen Powell"," Jennifer Connelly"]
// }
// console.log(`Esse é o nome do filme ${filme.nome}\n Ele lançou em ${filme.anoDeLancamento}\n O diretor é o ${filme.diretor}. \nEsse é o elenco ${filme.elenco}`)
//console.log(filme) ele escreve todo o objeto
//console.log(filme["diretor"]) não é muito usado
 
// const professores = [
//     {nome: "andrei" , ano: 1 },
//     {nome: "Vitor" , ano: 2 },
//     {nome: "Guigo" , ano: 3 },
// ]
// console.log(professores[1].nome)
 
 
// const filme = {
//     nome: "Top Gun Maverick",
//     anoDeLancamento: "2022",
//     diretor: "Joseph Kosinski",
//     elenco: ["Tom Cruise"," Miles Teller"," Val Kilmer"," Glen Powell"," Jennifer Connelly"]
// }
 
// filme.personagems = ["Maverick","bradley","Tom Kasanski","jake","penny" ]
 
// console.log(`Esse é o nome do filme ${filme.nome}\n Ele lançou em ${filme.anoDeLancamento}\n O diretor é o ${filme.diretor}.`)
// console.log("Esses são os atores e seus respectivos personagens")
// console.log(`${filme.elenco[0]} = ${filme.personagems[0]}\n`)
// console.log(`${filme.elenco[1]} = ${filme.personagems[1]}\n`)
// console.log(`${filme.elenco[2]} = ${filme.personagems[2]}\n`)
// console.log(`${filme.elenco[3]} = ${filme.personagems[3]}\n`)
// console.log(`${filme.elenco[4]} = ${filme.personagems[4]}\n`)
 
// filme.elenco[0] = "XUXA"
//console.log(filme)


//SPREAD

// const aluno = {
//     nome: "pedro",
//     idade: "16",
//     signo: "Cancer"

// }
// console.log(aluno)
 
//  const novoAluno = {
//      ...aluno,
//      nome: "Gustavo",
//      genero: "masculino"
//  }
//  console.log(novoAluno)

const pessoa = {
    nome: "pedro",
    idade: "16",
    signo: "Cancer"
}
const amigo = {
    ...pessoa,
    comidasPref: ["Lasanha","Pizza","haburguer"],
    nomeDoAmigo: "Gustavo",
    idadeDoAmigo: "9",
}
console.log(`O meu nome é ${pessoa.nome} e minhas comidas favoritas são ${amigo.comidasPref}. 

O nome no meu melhor amigo se chama ${amigo.nomeDoAmigo} e sua idade é ${amigo.idadeDoAmigo}.`)