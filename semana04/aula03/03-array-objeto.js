/*const students = [  //array lista de objetos
    {"name": "Ana", "grade": 8, "imgURL": "https://link.com"},
    {"name": "Bruno", "grade": 5},
    {"name": "Carla", "grade": 7}
]
console.log(students);

// JSON 
console.log(students[2].grade)  //Pega o item pelo indice e a propriedade pela chave

students.forEach((student) => {
return console.log(student.name)
})
*/

const values = [30, 20, 50];
const total = values.reduce((sum, v) => sum + v, 0);
console.log(total);