// desafio 1 - Preço com desconto
// Escreva a função "PreComDesconto(preco, desconto)" que DEVOLVE
// O preço já com o desconto aplicado (desconto em %).
// Pratica: função, parâmetros, return

function precoComDesconto(preco, desconto) {
    const  valorComDesconto = preco - (preco * desconto) / 100;
    return valorComDesconto
}
//console.log(precoComDesconto(100, 10));  // 90

const precoComDescontoArrow = (preco, desconto) =>
    preco - (preco * desconto) / 100;

//console.log(precoComDescontoArrow(100, 20));  // 

// DESAFIO 2 - Maior de dois
// Escreva "maiorDeDois(a, b)" que DEVOLVE o m aior dos dois numeros
// Pratica: função + if/else + return dentro da descisão

function maiorDeDois (a, b) {
 if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Testes
console.log(maiorDeDois(10, 5)); // 10
console.log(maiorDeDois(3, 8));  // 8
console.log(maiorDeDois(7, 7));  // 7
        