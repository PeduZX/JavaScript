let saldo = 0
let valor = 0
let entrada


while (entrada != 0) {
    menu()

    entrada = Number(prompt("Digite o número da opção desejada:"))
    switch (Number(entrada)) {
            case 1:
                 atualizarDadosCadastraisCliente()
                break
            case 2: 
                console.log("Esse é o seu novo saldo: ", realizarDeposito(saldo))
                break
            case 3:
                realizarSaque()
                break
            case 4:
                realizarEmprestimo()
                break
             case 0:
                console.log("Obrigado por usar o Banco SENAC LTDA!")
                break
            }
        }
    


   
function menu() {
            console.log("Bem-vindo ao Banco SENAC LTDA!");
            console.log("1 - Informar/Atualizar dados cadastrais do cliente");
            console.log("2 - Realizar depósito");
            console.log("3 - Realizar saque");
            console.log("4 - Realizar empréstimo");
            console.log("0 - Sair");
}
function atualizarDadosCadastraisCliente(){
        const nome = prompt("Digite seu nome:");
        const dataNa = prompt("Digite sua data de nascimento (dd/mm/aa):");
        const idade = Number(prompt("Digite sua idade:"));
        const genero = prompt("Digite seu gênero:");
        const cpf = prompt("Digite seu CPF:");
        console.log("Seus dados foram atualizados com sucesso");
}
    
function realizarDeposito() {
    const valor = Number(prompt("Digite o valor que você irá depositar: "))
    saldo += valor
    return saldo
}
function realizarSaque() {
    const valor = Number(prompt("Digite o valor de saque: "))
    saldo = saldo - valor
    console .log(`Saldo atualizado. Seu novo saldo é de: ${saldo} Reais`)

} function realizarEmprestimo() {
    const valor = Number(prompt("Digite o valor do empréstimo: "))
    saldo += valor

    console .log(`Saldo atualizado. Seu novo saldo é de: ${saldo} Reais`)
    }
