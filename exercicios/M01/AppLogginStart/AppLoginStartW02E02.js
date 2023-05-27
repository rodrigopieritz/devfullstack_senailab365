var user = {
  username: "",
  password: "",
};
var authorizedUser = {
  username: "Master",
  password: "Passw123",
};
let login = document.getElementById("login");
let username = document.getElementById("username");
let password = document.getElementById("password");

const handleChangeUsername = (event) => {
  user.username = event.target.value;
};
const handleChangePassword = (event) => {
  user.password = event.target.value;
};

login.addEventListener("click", clicou);
username.addEventListener("change", handleChangeUsername);
password.addEventListener("change", handleChangePassword);

function clicou() {
  if (
    user.password == authorizedUser.password &&
    user.username == authorizedUser.username
  ) {
    alert(`Logado`);
  } else {
    alert("Credenciais incorretas");
  }
}
