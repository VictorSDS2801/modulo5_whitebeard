const prompt = require("prompt-sync")();

let listanumeros = []
let tamanholista = 0

function programa() {
    console.log("\nSeja bem vindo à calculadora estatística!")
    console.log("Digite 1 se você deseja adicionar uma nova lista de números.")
    console.log("Digite 2 se você deseja calcular a média da lista.")
    console.log("Digite 3 se você deseja calcular a mediana da lista.")
    console.log("Digite 4 se você deseja calcular a moda da lista.")
    console.log("Digite 5 se você deseja sair do programa.\n")

    let resposta = prompt("Digite aqui a sua resposta: ")

    try {
        switch (resposta) {
            case "1":
                addlista()
                break
            case "2":
                media()
                break
            case "3":
                mediana()
                break
            case "4":
                moda()
                break
            case "5":
                sair()
                break
            default:
                throw new Error("Digite um número válido.")
        }
    } catch (erro) {
        console.log("Erro:", erro.message)
        programa()
    }
}

function addlista() {
    let novalista = prompt(
        "Adicione aqui os números da sua nova lista, separados por vírgula: "
    )

    let lista = novalista
        .split(",")
        .map(numero => parseFloat(numero.trim()))

    if (lista.some(numero => isNaN(numero))) {
        throw new Error("Digite apenas números!")
    }

    listanumeros = lista
    tamanholista = listanumeros.length

    console.log("Lista adicionada com sucesso!")
    programa()
}

function media() {
    if (tamanholista === 0) {
        console.log("Sua lista ainda está vazia!")
        return programa()
    }

    let soma = 0

    for (let numero of listanumeros) {
        soma += numero
    }

    let resultado = soma / tamanholista
    console.log("A média da lista de números é", resultado)

    programa()
}

function mediana() {
    if (tamanholista === 0) {
        console.log("Sua lista ainda está vazia!")
        return programa()
    }

    let ordenada = [...listanumeros].sort((a, b) => a - b)
    let meio = Math.floor(tamanholista / 2)
    let resultado

    if (tamanholista % 2 !== 0) {
        resultado = ordenada[meio]
    } else {
        resultado = (ordenada[meio - 1] + ordenada[meio]) / 2
    }

    console.log("A mediana da lista de números é", resultado)
    programa()
}

function moda() {
    if (tamanholista === 0) {
        console.log("Sua lista ainda está vazia!")
        return programa()
    }

    let frequencia = {}
    let maiorFreq = 0
    let moda = null

    for (let numero of listanumeros) {
        frequencia[numero] = (frequencia[numero] || 0) + 1

        if (frequencia[numero] > maiorFreq) {
            maiorFreq = frequencia[numero]
            moda = numero
        }
    }

    if (maiorFreq === 1) {
        console.log("Não existe moda (todos os números aparecem uma vez).")
    } else {
        console.log("A moda da lista de números é", moda)
    }

    programa()
}

function sair() {
    console.log("Programa encerrado.")
    process.exit()
}

programa()
