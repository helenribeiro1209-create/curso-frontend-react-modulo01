const mercado = ["bolacha", "carne", "ovos", "queijo"]

mercado.push("café")  

mercado.forEach((item) => {
console.log(`Comprar: ${item}`)
})

console.log(`Tamanho da lista: ${mercado.length}`)
