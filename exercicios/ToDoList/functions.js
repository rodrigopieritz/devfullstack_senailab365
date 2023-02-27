let resp;
let arrayTask = [];

function run (){
   let paragraph = prompt('Adicionar tarefa: 1 \nBuscar tarefa: 2 \nAlterar tarefa: 3 \nDeletar tarefa: 4 \nSair: 5')

    switch (paragraph) {
        case "1":
            adicionar()
            break;
        case "2":
            buscar()
            break;
        case "3":
            alterar()
            break;
        case "4":
            deletar()
            break;
        default:
            console.log('6')
            break;
    }

}
function adicionar() {
    let pergunta = prompt('Digite a tarefa a ser adicionada:')
    arrayTask.push(pergunta)
    document.getElementById('list').innerHTML = arrayTask.map(item=>`<li>${item}</li>`).join(``);
    }

function buscar() {

    let pergunta = prompt('Digite a tarefa a ser buscada:')
    let arrayBusca = arrayTask.filter((p) => {
        return p == pergunta
    })
    if (arrayBusca == pergunta) {
        prompt(`O item: ${arrayBusca} esta na lista`)
    } else {
        prompt('não encontrei o item buscado, tente novamente')
    }
}

function alterar() {

    let pergunta = prompt('Digite a tarefa a ser excluida:')
    let pergunta1 = prompt('Digite a tarefa a ser incluida:')

    let index = arrayTask.indexOf(pergunta);
    arrayTask.splice(index, 1, pergunta1)
    prompt(`Tarefa add: ${arrayTask}`)
    document.getElementById('list').innerHTML = arrayTask.map(item=>`<li>${item}</li>`).join(``);
//falta restrição para a tarefa. Caso seja uma tarefa não encontrada ele vai para substituirr a última
}

function deletar() {
    let pergunta = prompt('Digite a tarefa a ser deletada:')
    let newList = arrayTask.filter((e) => {
        return e != pergunta
    })
    arrayTask = newList
    prompt(`Tarefa add: ${arrayTask}`)
    document.getElementById('list').innerHTML = arrayTask.map(item=>`<li>${item}</li>`).join(``);
}
document.getElementById('list').InnerHTML = "olá meu amigo";
