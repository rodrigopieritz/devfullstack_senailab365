let usuarios = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
let frutas = ["Banana", "Morango", "Maçã", "Uva", "Pêra", "Laranja"];

usuarios.sort();
frutas.sort();
frutas.reverse();
resultado = [];

for (let i = 0; i < usuarios.length; i++) {
  resultado.push(`${usuarios[i]} - ${frutas[i]}`);
}

// Caso não fosse usada a função reverse, poderia ter sido utilizado no índice da fruta <frutas.length - 1 - i>
console.log(resultado);
