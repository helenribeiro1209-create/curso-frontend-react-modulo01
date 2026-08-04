class Player {
    name = "Nome"
    score = 0
    showScore() {
console.log(`A jogadora ${this.name} tem ${this.score} pontos`)
    }
}

const player1 = new Player()

console.log(player1.name)
console.log(player1.score)
player1.showScore()