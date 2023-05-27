let array = [
  { nome: "luis", idade: 26 },
  { nome: "norma", idade: 16 },
  { nome: "daiana", idade: 26 },
  { nome: "jorge", idade: 16 },
  { nome: "kauan", idade: 16 },
  { nome: "charles", idade: 26 },
  { nome: "marco", idade: 16 },
  { nome: "bruno", idade: 16 },
];

function separarMaiores(array) {
  let pessoasMaiores = [];
  let pessoasMenores = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].idade >= 18) {
      pessoasMaiores.push(array[i]);
          } else {
      pessoasMenores.push(array[i]);
    }
  }
  console.log(pessoasMaiores, pessoasMenores);
  
}

separarMaiores(array);