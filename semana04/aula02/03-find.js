const numbers = [10, 3, 8, 1, 6]

const bigger = numbers.find((n) => {
    return n >= 6
})

console.log(bigger)

//find devolvve O PRIMEIRO item que passou (o item, não um array).
// se não encontrar no teste o resultado solicitado, recebe um undefined.