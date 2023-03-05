//EXERCICIO -> lista que troque o nome das pessoas
/*
var lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
console.log(lista);
//
var changea = ["José"];
var changeb = ["Danilo"];

// valiação de if se é igual, menor que o maior ou menor quezero é inválido

let newlist = lista.map(
    (elemento) => {
   if (elemento == changea) {
    return changeb;
  } else if (elemento == changeb) {
    return changea;
  } else {
    return elemento;
  }
 }
);

console.log(newlist);

----------------------------------------------------------------------------
Exemplo Professor

function trocarPosicao(inicial, final) {
  const lista =  ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']

  const novaLista = []

  for(let index = 0; index < lista.length; index++){
    if(index === inicial) {
      novaLista.push(lista[final])
      continue
    }
    if(index === final){
      novaLista.push(lista[inicial])
      continue
    }
    novaLista.push(lista[index])
  }

  console.log(novaLista)
}

trocarPosicao(0, 2)

----------------------------------------------------

function trocarPosicao(inicial, final) {
  const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']

  const novaLista = []

  if(inicial < 0 || final < 0){
    return console.log('Não pode enviar valores menores que zero')
  }

  if(inicial >= lista.length || final >= lista.length) {
    return console.log('Não pode enviar valores maiores ou iguais ao tamanho da lista')
  }

  if(typeof inicial !== 'number' || typeof final !== 'number') {
    return console.log('O atributo envia
*/
//EXERCíCIO

const lista =  ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']

let usuario = "José"

let userSearch = lista.find(pessoa => {
    return pessoa == usuario});
    console.log(userSearch)
    if (userSearch.length>=0) {
    }else{
 console.log("erro");       
    }

console.log(userSearch.length)

/*
"const lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
const novaLista = [];
function trocarPosicao(posicaoInicial, posicaoFinal) {
    if (posicaoInicial >= lista.length || posicaoFinal >= lista.length) {
        console.log("Erro: posição inválida na lista");
        return;
    }
    for (let i = 0; i < lista.length; i++) {
        if (i === posicaoInicial) {
            novaLista.push(lista[posicaoFinal]);
        } else if (i === posicaoFinal) {
            novaLista.push(lista[posicaoInicial]);
        } else {
            novaLista.push(lista[i]);
        }
    }
    console.log(novaLista);
}
trocarPosicao(5, 2); "

--------------------------------------------

// Exercício 1

function trocarPosicao(inicial, final) {
  const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']

  const novaLista = []

  if(inicial < 0  final < 0){
    return console.log('Não pode enviar valores menores que zero')
  }

  if(inicial >= lista.length  final >= lista.length) {
    return console.log('Não pode enviar valores maiores ou iguais ao tamanho da lista')
  }

  if(typeof inicial !== 'number' || typeof final !== 'number') {
    return console.log('O atributo enviado não é um número')
  }

  for (let index = 0; index < lista.length; index++) {
    if (index === inicial) {
      novaLista.push(lista[final])
      continue
    }
    if (index === final) {
      novaLista.push(lista[inicial])
      continue
    }
    novaLista.push(lista[index])
  }

  console.log(novaLista)
}

trocarPosicao(0, 1)

--------------------------------------------------------

// Exercício 1

function trocarPosicao(inicial, final) {
  const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']

  if(inicial < 0  final < 0) return console.log('Não pode enviar valores menores que zero')

  if(inicial >= lista.length  final >= lista.length) return console.log('Não pode enviar valores maiores ou iguais ao tamanho da lista')

  if(typeof inicial !== 'number' || typeof final !== 'number') return console.log('O atributo enviado não é um número')

  const novaLista = lista.map((_, index) => {
    if(index === inicial) return lista[final]
    if(index === final) return lista[inicial]
    return lista[index]
  })

  console.log(novaLista)
}

trocarPosicao(0, 1)

-----------------------------------------------------------------

// Exercicio 2

function procurarUsuario(nome) {
  const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']

  const restanteDaLista = []
  let index = 0
  for(index = 0; index < lista.length; index++) {
    if(lista[index] !== nome){
      restanteDaLista.push(lista[index])
    }
  }

  if(index === lista.length) {
    return console.log('O valor não foi encontrado na lista')
  }

  console.log(nome, restanteDaLista)
}

procurarUsuario("pedro")
// Exercicio 2

function procurarUsuario(nome) {
  const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']

  if(!lista.includes(nome)){
    return console.log(O valor enviado ${nome} não consta na lista)
  }

  const restanteDaLista = lista.filter(nomeNaLista => nomeNaLista !== nome)

  console.log(nome, restanteDaLista)
}

procurarUsuario("Pedro")
*/