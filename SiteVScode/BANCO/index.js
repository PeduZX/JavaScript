// let saldoCliente = 0;
// let totalDepositos = 0;
// let totalSaques = 0;
// let totalEmprestimos = 0;
// const senha = 12345;
 
// function inicio() {
//     let entrada;
 
//     while (entrada != 0){
//         menu();
//         entrada = prompt("Digite o número da opção desejada:");
 
//         switch (Number(entrada)) {

//             case 1:
//                 atualizarDadosCadastrais();
//                 break;
//             case 2:
//                 realizarDeposito();
//                 break;
//             case 3:
//                 realizarSaque();
//                 break;
//             case 4:
//                 realizarEmprestimo();
//                 break;
//             case 5:
//                 visualizarSaldo();
//                 break;
//             case 6:
//                 visualizarExtrato();
//                 break;
//             case 0:
//                 console.log("Obrigado por usar o Banco SENAC LTDA!");
//                 break;
//             default:
//                 console.log("Opção inválida. Por favor, tente novamente.");
//         }
//     } 
// }
 
// function menu() {
//     console.log("Bem-vindo ao Banco SENAC LTDA!");
//     console.log("1 - Informar/Atualizar dados cadastrais do cliente");
//     console.log("2 - Realizar depósito");
//     console.log("3 - Realizar saque");
//     console.log("4 - Realizar empréstimo");
//     console.log("5 - Visualizar saldo");
//     console.log("6 - Visualizar extrato");
//     console.log("0 - Sair");
// }
 
// function atualizarDadosCadastrais() {
//     const password = Number(prompt("Digite a senha:"));
 
//     if (password === senha) {
//         const nome = prompt("Digite seu nome:");
//         const dataNa = prompt("Digite sua data de nascimento (dd/mm/aa):");
//         const idade = Number(prompt("Digite sua idade:"));
//         const genero = prompt("Digite seu gênero:");
//         const cpf = prompt("Digite seu CPF:");
//         console.log("Seus dados foram atualizados com sucesso");
//     } else {
//         console.log("Senha inválida");
//     }
// }
 
// function realizarDeposito() {
//     const password = Number(prompt("Digite a senha:"));
 
//     if (password === senha) {
//         const valor = Number(prompt("Digite o valor que você irá depositar:"));
//         saldoCliente += valor;
//         totalDepositos += valor;
//         console.log(`Saldo atualizado. Seu novo saldo é de: ${saldoCliente} Reais`);
//     } else {
//         console.log("Senha inválida");
//     }
// }
 
// function realizarSaque() {
//     const password = Number(prompt("Digite a senha:"));
 
//     if (password === senha) {
//         const valor = Number(prompt("Digite o valor de saque:"));
 
//         if (valor <= saldoCliente) {
//             saldoCliente -= valor;
//             totalSaques += valor;
//             console.log(`Saldo atualizado. Seu novo saldo é de: ${saldoCliente} Reais`);
//         } else {
//             console.log("Saldo insuficiente para saque");
//         }
//     } else {
//         console.log("Senha inválida");
//     }
// }
 
// function realizarEmprestimo() {
//     const password = Number(prompt("Digite a senha:"));
 
//     if (password === senha) {
//         const emprestimo = saldoCliente * 0.50;
//         console.log(`O seu saldo atual é de: ${saldoCliente} Reais`);
//         console.log(`No entanto, você só tem direito de pegar um empréstimo de: ${emprestimo} Reais`);
//         const aceita = prompt("Você aceita o empréstimo? (s/n):");
 
//         if (aceita.toLowerCase() === 's') {
//             saldoCliente += emprestimo;
//             totalEmprestimos += emprestimo;
//             console.log(`Empréstimo de: ${emprestimo} Reais disponibilizado para você`);
//             console.log(`Esse é seu novo saldo: ${saldoCliente} Reais`);
//         } else {
//             console.log("É uma pena!");
//         }
//     } else {
//         console.log("Senha inválida");
//     }
// }
 
// function visualizarSaldo() {
//     const password = Number(prompt("Digite a senha:"));
 
//     if (password === senha) {
//         console.log(`Seu saldo atual é de: ${saldoCliente} Reais`);
//     } else {
//         console.log("Senha inválida");
//     }
// }
 
// function visualizarExtrato() {
//     const password = Number(prompt("Digite a senha:"));
 
//     if (password === senha) {
//         console.log("Extrato:");
//         console.log(`Saldo atual: ${saldoCliente} Reais`);
//         console.log(`Total depositado: ${totalDepositos} Reais`);
//         console.log(`Total sacado: ${totalSaques} Reais`);
//         console.log(`Total de empréstimos: ${totalEmprestimos} Reais`);
//     } else {
//         console.log("Senha inválida");
//     }
// }
 
// // Iniciar o programa
// inicio();