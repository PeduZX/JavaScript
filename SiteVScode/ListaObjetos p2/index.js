//Ex1
// const aluno = {
    //     nome: 'Pedro',
    //     idade: '16',
    //     notas: [10,9,10]
    
    // }
    
    // function media(aluno){
        
        //    let media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3
        
        //     return media
        // }
        
        // console.log(media(aluno))
        
        
        
        
//Ex2
// Definição inicial do carrinho com uma estrutura de itens
// const carrinho = {
//     itens: [
//         { nome: "batata", preco: 2 },
//         { nome: "carne", preco: 10 },
//         { nome: "arroz", preco: 4 },
//         { nome: "feijão", preco: 5 }
//     ],
//     total: 0
// }


// function addItens(carrinho) {
//     const nome = prompt("Qual item você quer adicionar?").toLowerCase()
//     const preco = Number(prompt("Qual o preço desse item?"))

//     let itemEncontrado = false;

//     for (let i = 0; i < carrinho.itens.length; i++) {
//         if (carrinho.itens[i].nome === nome) {
//             carrinho.itens[i].preco = preco
//             itemEncontrado = true
//             break;
//         }
//     }

//     if (!itemEncontrado) {
//         carrinho.itens.push({ nome: nome, preco: preco })
//     }
// }

// function calcularTotal(carrinho) {
//     let total = 0

//     for (let i = 0; i < carrinho.itens.length; i++) {
//         total += carrinho.itens[i].preco
//     }

//     carrinho.total = total
// }


// addItens(carrinho)
// calcularTotal(carrinho) 

// console.log(carrinho)






//Ex3
// const livroDigital = {
//     titulo: "Uma longa caminhada até a água", 
//     autor: "Linda Sue Park", 
//     paginasLidas: 101
// }

// function addPags(livro) {
//     let qntleu = Number(prompt("Quantas páginas a mais você leu: "));
//     if (qntleu > 0)
//      livro.paginasLidas += qntleu;
// }

// addPags(livroDigital);
// console.log(`Você agora leu ${livroDigital.paginasLidas} páginas no livro "${livroDigital.titulo}".`)

//Ex4

//p1
// let usuario = {
//     nome: 'Pedro',
//     email:"pedro@gmail.com",
//     senha: "1234",
//     cpf : "030.343.530-57" 
// }
// console.log(usuario)

// let novoUsuario = {
//     ...usuario, 
//     senha: "4321"
// }
// console.log(novoUsuario)


// let nome = prompt('Digite o nome do usuário:')
// let email = prompt('Digite o e-mail do usuário:')
// let senha = prompt('Digite a senha atual do usuário:')
// let cpf = prompt('Digite o CPF do usuário:')

// let usuario = {
//     nome: nome,
//     email: email,
//     senha: senha,
//     cpf: cpf
// }

// console.log('Usuário Original:', usuario)


// let novaSenha = prompt('Digite a nova senha:')

// let novoUsuario = {
//     ...usuario,
//     senha: novaSenha
// }

// console.log('Usuário com Nova Senha:', novoUsuario)