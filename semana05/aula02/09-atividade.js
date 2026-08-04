// Solicitação de empréstimo

function requestiLoan(income) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(income >= 6000) {
            resolve("Empréstimo aprovado!")
            } else {
            reject("Empréstimo negado!")
            }
        },4000)
    })
}

requestiLoan(40000)
.then((message) => console.log(message))
.catch((error) => console.log(error))

requestiLoan(60000)
.then((message) => {
    console.log("Passo 1: ", message)
    return "Seguindo para análise..."
})
.then((next) => console.log("Passo 2: ", next))
.catch((error) => console.log(error))
