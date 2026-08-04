const prompt = require("prompt-sync")()
// Testando math.random()

//console.log(Math.random())

//console.log(Math.floor(Math.random() * 10))

const alvo = Math.floor(Math.random() * 100)
let palpite = 0

function dica (palpite, alvo) {
if (palpite == alvo) {
    return "Acertou!"
}else if (palpite > alvo) {
    return "O número é menor que o seu palpite!"
}else {
    return "O número é maior que o seu palpite!"
}
}

while (palpite != alvo) {
    palpite = prompt(" Digite o seu palpite:")
    console.log(dica(palpite, alvo))
}