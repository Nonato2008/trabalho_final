const fs = require("fs");
const promptSync = require("prompt-sync")();
const path = require("path");


let i = 0;
let conteudoArquivo = "Nome\tEndereço\tDistância\tTaxa\tTipo\tValor Normal\tValor Urgente\n"
if (fs.existsSync("dados.txt")) {
    conteudoArquivo = fs.readFileSync("dados.txt", "utf8");
}


let continuar


let nomes = []
let enderecos = []
let distancias = []
let taxas = []
let tipoEntregas = []
let valoresUrgentes = []
let valoresNormais = []


do {


    let nome


    do {
        nome = promptSync("Digite seu nome: ")
        if (!isNaN(nome)) {
            console.log("Nome Inválido")
        }
    } while (nome === 0 || !(isNaN(nome)))


    nomes[i] = nome


    let endereco


    do {
        endereco = promptSync("Informe seu endereço completo: ")
        if (!isNaN(endereco)) {
            console.log("Endereço Inválido")
        }
    } while (endereco == 0 || !(isNaN(endereco)))


    enderecos[i] = endereco


    let distancia


    do {
        distancia = promptSync("Informe a distância da loja até o seu destino em quilômetros (somente números): ")
        if (isNaN(distancia)) {
            console.log("Somente numeros, não escreva nenhuma letra!")
        }
    } while (distancia == 0 || (isNaN(distancia)))


    distancias[i] = distancia


    let taxa


    do {
        taxa = promptSync("Informe a taxa para a entrega: ")
        if (isNaN(taxa)) {
            console.log("Somente numeros, não escreva nenhuma letra!")
        }
    } while (taxa == 0 || (isNaN(taxa)))


    taxas[i] = taxa




    let tipoEntrega


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




        let valorNormal = distancia * taxa;
        let valorUrgente;


       
        if (tipoEntrega == "S") {
            valorUrgente = (distancia * taxa) * 1.2
           
            console.log(`sua entrega URGENTE deu um valor total de R$${valorUrgente.toFixed(2)}`)


            tipoEntrega = "Urgente"
        } else {
            console.log(`Sua engtrega NORMAL deu um valor total de R$${valorNormal.toFixed(2)}`)
            tipoEntrega = "Normal"
            valorUrgente = 0
        }
        tipoEntregas[i] = tipoEntrega


        valoresUrgentes[i] = valorUrgente;


        valoresNormais[i] = valorNormal;


    } while (!isNaN(tipoEntrega));




    // conteudoArquivo += tipoEntregas[i] = tipoEntrega


    continuar = promptSync("Deseja cadastrar outra entrega? (S/N): ").toUpperCase();
    i++;


} while (continuar === "S")


    for (let j = 0; j < i; j++) {


 
        conteudoArquivo += `${nomes[j]} ${enderecos[j]} ${distancias[j]}km R$${taxas[j]} ${tipoEntregas[j]} R$${valoresNormais[j]} R$${valoresUrgentes[j]}\n`;
    }




fs.writeFileSync("dados.txt", conteudoArquivo, "utf8");


console.log("\nConteúdo do arquivo:");
console.log(fs.readFileSync("dados.txt", "utf8"));

