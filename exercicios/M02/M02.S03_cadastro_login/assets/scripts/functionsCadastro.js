const cadastrarForm = document.getElementById("button")
cadastrarForm.addEventListener("click",processarCadastro)

function processarCadastro(event) {    
    event.preventDefault();
    location.href = "./login.html";
    console.log(event)
}