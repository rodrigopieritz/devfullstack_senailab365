let lista = [
  "Pedro",
  "José",
  "Aderbal",
  "Danilo",
  "Luisa",
  "Vitoria",
  "Luis",
  "Danilo",
  "José",
];

/* método mais simples para extrair elementos com valores não duplicados
let listaUnicos = new Set(lista);
console.log(listaUnicos);
*/

let listaDuplicados = [];
let listaUnicosb = [];

for (let i = 0; i < lista.length; i++) {
  if (lista.indexOf(lista[i]) == i) {
    listaUnicosb.push(lista[i]);
  } else {
    listaDuplicados.push(lista[i]);
  }
}
console.log(listaUnicosb);
console.log(listaDuplicados);
