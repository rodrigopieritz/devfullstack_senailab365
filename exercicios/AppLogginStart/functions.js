// user vars
var user = {
  username: "",
  password: "",
};
var authorizedUser = {
  username: "Master",
  password: "Passw123",
};

//LocalStorage

var lstgUser = localStorage.getItem('user');
var lstgPass = localStorage.getItem('password');
console.log(lstgUser);
console.log(lstgPass);

/*if (lstgUser == authorizedUser.username && 
  lstgPass == authorizedUser.password) {
  alert('Você já está logado')
  location.href = "./logout.html";  
  } else {'Olá!!!'}

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
    localStorage.setItem('user',user.username)
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
