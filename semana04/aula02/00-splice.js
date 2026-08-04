const shoppingList = ["arroz", "iogurte", "feijão", "café"]

//shoppingList.shift()

console.log(shoppingList)

//shoppingList.splice(1, 1)  // Remover item da lista

//console.log(shoppingList)

/*const position = shoppingList.indexOf("feijão") // encontrar item na lista
console.log(position)

shoppingList.splice(position, 1)
console.log(shoppingList)*/

shoppingList.splice(0, 1, "arroz integral")  // exclui o item "arroz" e substitui por "arroz integral".

console.log(shoppingList)