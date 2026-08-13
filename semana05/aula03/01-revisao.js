/*class Task {
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
*/

class Thermostat {
  constructor() {
    this.temp = 20;
  }
  up() {
    this.temp = this.temp + 1;
  }
}
const t = new Thermostat();
t.up();
t.up();
t.up();
console.log(t.temp)