/*
let valor_a = window.prompt("Qual é o primeiro valor?");
let valor_b = window.prompt("Qual é o segundo valor?");

let resultado = parseInt (valor_a) + parseInt (valor_b);
window.alert("O resultado da operação é " + resultado);

DECLARACAO DE FUNCAO
function saudacao(nome) {
    window.alert("Ahoy " + nome) 
}
//executar funcao
saudacao("Jubileu");
*/
/*
const aluno = {
    nome: "Rodrigo Oliveira Pieritz",
    idade: 32,
    profissao: "Engenheiro de Produção",
    cidade: "Florianópolis",
    estado: "Santa Catarina"
}

//criar uma nova propriedade

aluno.email = "rodrigopieritz@hotmail.com"

console.log (aluno);

*/

function mostraPergunta (){
    const paragrafo = document.createElement('p')
    paragrafo.innerText = 'Quem ama muito a Chay?'
    document.getElementById ('123').appendChild(paragrafo)
}
function exibirNome(){
    let elemento_meu_nome;
    elemento_meu_nome=document.getElementById("meu_nome");
    elemento_meu_nome.innerHTML = "<h2>Rodrigo Oliveira Pieritz</h2>"
    elemento_meu_nome.style.color = "red"

}

function apagarNome(){
    let elemento_meu_nome;
    elemento_meu_nome=document.getElementById("meu_nome");
    elemento_meu_nome.innerHTML = "<h2></h2>"
}

function alterarAvatar(){
    let foto_avatar;
    foto_avatar=document.getElementById("avatar");
    foto_avatar.src = "https://noticiasdatv.uol.com.br/media/_versions/artigos_2021/globo-pantanal-osmar-prado-reproducao-globo_fixed_large.jpg"
}