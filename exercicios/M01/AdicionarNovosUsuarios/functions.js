let lista = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
let listaAdd = [];

function adicionar(listaAdd) {
  let tempList = [];
  if (listaAdd.length < 1) {
    console.log("insira um ou mais nomes");
  } else {
    for (let i = 0; i < listaAdd.length; i++) {
      if (lista.indexOf(listaAdd[i]) > -1) {
        console.log("Erro! Não podem ser inseridos nomes repetidos");
        break;

    // poderia ter sido feito com include
      } else if (typeof listaAdd[i] != "string") {
        console.log("Erro! Só podem ser enviados nomes do tipo texto");
        break;
      } else {
        tempList.push(listaAdd[i]);
      }
    }
  }
  if (tempList.length == listaAdd.length) {
   /* tempList.map((elemento) => {
      lista.push(elemento);
          });
          Abaixo meneira mais simples dazer com o concat
    */
    const novaLista = lista.concat(tempList);
    console.log(novaLista);
  } else {
    console.log("Arrume a lista e tente novamente");
  }
}

let listaEnviada = ["Carlos", "Murilo","Luiz"];
adicionar(listaEnviada);
