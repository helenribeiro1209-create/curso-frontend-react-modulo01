// Receber dados do usuário pelo terminal

const prompt = require("prompt-sync")()

let nome = prompt("Qual o seu nome?")
let idade = prompt("Qual a sua idade?")

//console.log(nome)
//console.log(idade)

// Olá, Helen! Ano que vem você fazrá 26 anos!

//console.log("Olá, " + nome + "! Ano que vem você fará " + (++idade) + " anos!")
console.log("Olá, " + nome + "! Ano que vem você fará " + (Number(idade) + 1) + " anos!")



