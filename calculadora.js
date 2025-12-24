const prompt = require('prompt-sync')();

function programa() {
    console.log("Seja bem-vindo a calculadora!")
    let pn = prompt("Digite aqui o seu primeiro número: ")
    let primeironumero = validarnumero(pn)
    console.log("Digite '+' se você deseja somar.")
    console.log("Digite '-' se você deseja subtrair.")
    console.log("Digite '*' se você deseja multiplicar.")
    console.log("Digite '/' se você deseja dividir.")
    console.log("Digite '%' se você deseja tirar a porcentagem.\n")
    let operacao = prompt("Digite aqui sua resposta: ")
    let sn = prompt("Digite aqui o segundo número: ")
    let segundonumero = validarnumero(sn)


    switch (operacao) {
        case "+":
            adicao(primeironumero, segundonumero)
            break
        case "-":
            subtracao(primeironumero, segundonumero)
            break
        case "*":
            multiplicacao(primeironumero, segundonumero)
            break
        case "/":
            divisao(primeironumero, segundonumero)
            break
        case "%":
            porcentagem(primeironumero, segundonumero)
            break
        default:
            throw new Error("Digite um caractere correspondente!")
    }
}
function validarnumero(n) {
    let numero = Number(n)
    if (isNaN(numero)) {
        throw new Error("Digite um número.")
    }
    return numero
}
function adicao(n1, n2) {
    let soma = n1 + n2
    console.log("O resultado da soma é", soma)
}
function subtracao(n1, n2) {
    let subtracao = n1 - n2
    console.log("O resultado da subtração é", subtracao)
}
function multiplicacao(n1, n2) {
    let multiplicacao = n1 * n2
    console.log("O resultado da multiplicação é", multiplicacao)
}
function divisao(n1, n2) {
    if (n2 === 0) {
        throw new Error("Não é possível realizar divisão por 0!")
    }
    else {
        let divisao = n1 / n2
        console.log("O resultado da divisão é", divisao)
    }
}
function porcentagem(n1, n2) {
    if (n2 === 0) {
        throw new Error("Não é possível calcular uma porcentagem com um divisor 0!")
    }
    else {
        let porcentagem = (n1 / n2) * 100
        console.log("O resultado da porcentagem " + n1 + "% de " + n2 + " é", porcentagem)
    }
}
programa()