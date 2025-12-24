const prompt = require("prompt-sync")()
let consultas =[]
function programa() {
    console.log("Seja bem vindo ao menu do gerenciamento de consultas!")
    console.log("Digite 1 se você deseja adicionar uma nova consulta.")
    console.log("Digite 2 se você deseja listar todas as consultas.")
    console.log("Digite 3 se você deseja atualizar uma consulta existente.")
    console.log("Digite 4 se você deseja cancelar uma consulta.")
    console.log("Digite 5 se você deseja sair do programa.")
    let resposta = prompt("Digite aqui a sua resposta: ", "\n")

    switch (resposta) {
        case '1':
            addconsulta()
            break
        case '2':
            listarconsultas()
            break
        case '3':
            atualizarconsulta()
            break
        case '4':
            cancelarconsulta()
            break
        case '5':
            sair()
            break
        default:
            throw new Error("Digite um número correspondente!")
    }
}
function addconsulta() {
    let nome = prompt("Digite o nome do paciente: ")
    let medico = prompt("Digite o nome do médico: ")
    let data = prompt("Digite a data da consulta: ")
    let horario = prompt("Digite o horário da consulta: ")

    consultas.push({nome: nome, medico: medico, data: data, horario: horario})

    console.log("Consulta adicionada com sucesso!\n")
    programa()
}
function listarconsultas() {
    if (consultas.length === 0){
        console.log("A lista de consultas está vazia!")
        return programa()
    }
    for (let i = 0; i < consultas.length; i++) {
        console.log((i + 1) + " - " + consultas[i].nome + "-" + consultas[i].medico + "-" + consultas[i].data + "-" + consultas[i].horario)
    }
    programa()
}
function atualizarconsulta() {
    if (consultas.length === 0){
        console.log("A lista de consultas está vazia!")
        return programa()
    }
    let qualatt = Number(prompt("Digite aqui qual é a consulta que você quer atualizar (1, 2, 3...): "))
    if (isNaN(qualatt) || qualatt < 1 || qualatt > consultas.length) {
        console.log("Não existe nenhuma consulta na posição que você listou!")
        return programa()
    }
    let indice = qualatt - 1

    console.log("Digite 1 se você deseja mudar o nome do paciente.")
    console.log("Digite 2 se você deseja mudar o nome do médico.")
    console.log("Digite 3 se você deseja mudar a data da consulta.")
    console.log("Digite 4 se você deseja mudar o horário da consulta.")

    let response = prompt("Digite aqui sua resposta: ")

    switch (response) {
        case '1':
            let nomen = prompt("Digite o nome do novo paciente: ")
            consultas[indice].nome = nomen
            console.log("Nome mudado com sucesso!")
            break
        case '2':
            let medicon = prompt("Digite o nome do novo médico: ")
            consultas[indice].medico = medicon
            console.log("Médico alterado com sucesso!")
            break
        case '3':
            let datan = prompt("Digite a nova data da consulta: ")
            consultas[indice].data = datan
            console.log("Data alterada com sucesso!")
            break
        case '4':
            let horarion = prompt("Digite o novo horário da consulta: ")
            consultas[indice].horario = horarion
            console.log("Horário alterado com sucesso!")
            break
        default:
            console.log("Digite um número correspondente!")
            atualizarconsulta()
    }

    programa()
}
function cancelarconsulta() {
    if (consultas.length === 0){
        console.log("A lista de consultas está vazia!")
        return programa()
    }
    for (let i = 0; i < consultas.length; i++) {
        console.log((i + 1) + " - " + consultas[i].nome + "-" + consultas[i].medico + "-" + consultas[i].data + "-" + consultas[i].horario)
    }
    let qualcan = Number(prompt("Digite aqui a posição da consulta que você deseja cancelar: "))
    if (isNaN(qualcan) || qualcan < 1 || qualcan > consultas.length) {
        console.log("Digite uma posição existente!\n")
        cancelarconsulta()
    }
    let indice = qualcan - 1

    consultas.splice(indice, 1)

    console.log("Consulta cancelada com sucesso!")
    programa()
}
function sair() {
    console.log("Saindo...")
    process.exit()
}
programa()