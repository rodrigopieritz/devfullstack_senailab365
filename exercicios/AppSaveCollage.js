var students = [
  {
    name: "Rodrigo Oliveira Pieritz",
    height: 1.89,
    age: 34,
    gender: "Masculiino",
    room: "Trindade",
    mathematics: 8.2,
  },
  {
    name: "Marina da Silva",
    height: 1.66,
    age: 42,
    gender: "Feminino",
    room: "Ingleses",
    mathematics: 6.1,
  },
  {
    name: "João Pé de Feijão",
    height: 1.69,
    age: 22,
    gender: "Masculino",
    room: "Joaquina",
    mathematics: 7.0,
  },
  {
    name: "Juliano Albuquerque",
    height: 1.88,
    age: 30,
    gender: "Masculino",
    room: "Trindade",
    mathematics: 5.2,
  },
  {
    name: "Joana D'Arc",
    height: 1.72,
    age: 85,
    gender: "Feminino",
    room: "Ingleses",
    mathematics: 9.7,
  },
];

for (const i in students) {
  if (students[i].mathematics >= 7) {
    console.log(`Aluno ${students[i].name} está aprovado em Matemática`);
  } else {
    console.log(`Aluno ${students[i].name} está reprovado em Matemática`);
  }
}

let sum = 0;
let averege = 0;
students.forEach((student) => {
  sum = sum + student.mathematics;
});
averege = sum / students.length;

console.log("A média da turma em Matemática é " + averege);
