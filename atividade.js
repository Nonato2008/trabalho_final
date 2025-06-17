const fs = require("fs");
const promptSync = require("prompt-sync")();
const path = require("path");

let i

let nome
let nomes = []
do {
    nome = promptSync("Digite seu nome: ")
    if (!isNaN(nome)) {
        console.log("Nome Inválido")
    }
} while (nome === 0 || !(isNaN(nome)))

nomes[i] = nome

let endereço
let endereços = []
do {
    endereço = promptSync("Informe seu endereço completo")
    if (!isNaN(endereço)) {
        console.log("Endereço Inválido")
    }
} while (endereço == 0 || !(isNaN(endereço)))

endereços[i] = endereço

let distancia
let distancias = []
do {
    distancia = promptSync("Informe a distância da loja até sua casa em quilômetros (somente números): ")
    if (isNaN(distancia)) {
        console.log("Somente numeros, não escreva nenhuma letra!")
    }
} while (distancia == 0 || (isNaN(distancia)))

distancias[i] = distancia

let taxa
let taxas = []
do {
    taxa = promptSync("Informe a taxa para a entrega: ")
    if (isNaN(taxa)) {
        console.log("Somente numeros, não escreva nenhuma letra!")
    }
} while (taxa == 0 || (isNaN(taxa)))

taxas[i] = taxas

let tipoEntrega
let tipoEntregas = []
do {
    tipoEntrega = promptSync("A entrega é urgente? (Digite s para confirmar): ");
    tipoEntrega = tipoEntrega.toUpperCase();
    if (!isNaN(tipoEntrega)) {
        console.log("Escreva somente LETRAS! Não deixe o campo vazio")
    } else {
        if (tipoEntrega == "S") {
            console.log("Para entregas URGENTES temos um acréscimo de 20%")
        }
    }
} while (!isNaN(tipoEntrega));

tipoEntregas[i] = tipoEntrega

// as linhas abaixo são detinadas a cálculos usando as informações coletadas

let multiplicação
let urgencia

multiplicação = distancia * taxa

if (tipoEntrega == "S") {
    urgencia = (distancia * taxa ) * 1.2
    console.log(`sua entrega URGENTE deu um valor total de R$${urgencia}`)
}else{
    console.log(`Sua engtrega NORMAL deu um valor total de R$${multiplicação}`)
}


