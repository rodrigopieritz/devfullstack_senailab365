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
    document.getElementById('list').innerHTML = arrayTask;
 }

function buscar() {

    let pergunta = prompt('Digite a tarefa a ser buscada:')
    let arrayBusca = arrayTask.filter((p) => {
        return p == pergunta
    })
    if (arrayBusca == pergunta) {
        console.log(`O item: ${arrayBusca} esta na lista`)
    } else {
        console.log('não encontrei o item buscado, tente novamente')
    }
}

function alterar() {

    let pergunta = prompt('Digite a tarefa a ser excluida:')
    let pergunta1 = prompt('Digite a tarefa a ser incluida:')

    let index = arrayTask.indexOf(pergunta);
    arrayTask.splice(index, 1, pergunta1)
    console.log(`Tarefa add: ${arrayTask}`)
    document.getElementById('list').innerHTML = arrayTask;
}

function deletar() {
    let pergunta = prompt('Digite a tarefa a ser deletada:')
    let newList = arrayTask.filter((e) => {
        return e != pergunta
    })
    arrayTask = newList
    console.log(`Tarefa add: ${arrayTask}`)
    document.getElementById('list').innerHTML = arrayTask;
}
document.getElementById('list').InnerHTML = "olá meu amigo";
