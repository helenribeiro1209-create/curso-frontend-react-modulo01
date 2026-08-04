class Task {
    constructor(title, done) {
        this.title = title
        this.done = done
    }
}

describe() {
    return `${this.title} - ${this.done ? "Feito" : "Pendente"}`
}
function loadFromServer() {
    const data = [
        { title: "Estudar closures", done: false },
        { title: "Fazer o mini-projeto"}
    ]
}