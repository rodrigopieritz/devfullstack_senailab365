const form = document.getElementById("formulario");

function getData() {
  return {
    empresa: form.empresa.value,
    cnpj: form.cnpj.value,
    responsavel: form.responsavel.value,
    email: form.email.value,
    telefone: form.telefone.value,
    senha: form.senha.value,
    senha1: form.senha1.value,
  };
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = getData();
  console.log(user);
  form.reset();
});