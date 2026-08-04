const car = {
    "brand": "Fiat",
    "year": 2020
}

car.color = "preto"

console.log(car)

car.year = 2025  // alterar ano

console.log(car)

// Pode excluir também a informação:

delete car.brand

console.log(car)

console.log(Object.keys(car)) // recebe as chaves

console.log(Object.values(car))   // recebe lista de valores
