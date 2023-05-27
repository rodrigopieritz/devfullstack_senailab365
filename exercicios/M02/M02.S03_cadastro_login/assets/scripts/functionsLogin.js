function enviarFormulario(e) {
    e.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    console.log(`E-mail:${email.value}\n Senha:${password.value}`);
  }