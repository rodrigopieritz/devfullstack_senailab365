// user vars
var user = {
  username: "",
  password: "",
};
var authorizedUser = {
  username: "Master",
  password: "Passw123",
  name: "João da Silva",
  email: "joaods@gmail.com",
  image: "professional_profile.jpg"
};
/*
//LocalStorage

var lstgUser = localStorage.getItem('user');
var lstgPass = localStorage.getItem('password');
console.log(lstgUser);
console.log(lstgPass);
*/
//VERIFICAR SE EXISTEM CREDENCIAIS NO LOCALSTORAGE


// GET ELEMENTS FROM HTML
let login = document.getElementById("login");
let username = document.getElementById("username");
let userpassword = document.getElementById("password");
let form = document.getElementById("form");
let logout = document.querySelector("logout");

// EVENT
const handleChangeUsername = (event) => {
  user.username = event.target.value;
};
const handleChangeUserpassword = (event) => {
  user.password = event.target.value;
};

//EVENT LISTENERS

login.addEventListener("click", clicou);
username.addEventListener("change", handleChangeUsername);
userpassword.addEventListener("change", handleChangeUserpassword);
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//FUNÇÕES

function clicou() {
  if (
    user.password == authorizedUser.password &&
    user.username == authorizedUser.username
  ) {
    alert(`Logado`);
    location.href = "./logout.html";
    localStorage.setItem('user',user.username);
    localStorage.setItem('password',user.password)
  
  } else {
    alert("Credenciais incorretas");
  }
}

function disconnect() {
  alert("você está sendo desconectado");
  location.href = "./index.html";
  localStorage.clear()
}

function showInfo (){
document.getElementById('name').innerHTML = `<h3>Nome</h3><p>${authorizedUser.name}</p>`;
localStorage.setItem('name',authorizedUser.name)
document.getElementById('email').innerHTML = `<h3>Email</h3><p>${authorizedUser.email}</p>`;
localStorage.setItem('email',authorizedUser.email)
document.getElementById('image').innerHTML = `<h3>Foto de Perfil</h3><img src=${authorizedUser.image}>`;
localStorage.setItem('image',authorizedUser.image)
}

function changeRegister (){
  document.getElementById('name').innerHTML = `<h3>Nome</h3><input id="newName" type="text" />`;
  document.getElementById('email').innerHTML = `<h3>Email</h3><input id="newEmail" type="text" />`;
  document.getElementById('image').innerHTML = `<h3>Foto de Perfil</h3><input id="newImage" type="text" />`;
  document.getElementById('newSumbition').innerHTML = `        <button
  id="UpdateChanges"
  onclick="{updateChanges()}"
  style="margin-top: 40px"
  type="submit"
>
  Atualizar Pefil
</button>" />`;
 
  }

  function updateChanges (){
    localStorage.removeItem('name');
    
    const handleChangeName = (event) => {
      authorizedUser.name = event.target.value;
    };

    console.log(authorizedUser.name)
       
    }
