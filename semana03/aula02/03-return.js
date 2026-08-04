function dobro(numero) {
    return numero * 2;
    //console.log("Calculei!");   // não é executado!
}

dobro(10);

//console.log(dobro(20));

const resultado = dobro(30);
//console.log(resultado);

// é maior de idade ou não
/*
function verificaMaiorIdade(idade) {
   if (idade >= 18) {
    return true;
   }else {
    return false;
   }
}
*/
    // forma simplificada...

function verificaMaiorIdade(idade) {
   let teste = "Teste";
   console.log(teste);
    return idade >= 18;
}

console.log(verificaMaiorIdade(16));

//console.log(verificaMaiorIdade(26));