const express = require("express");

const application = express();

application.use(express.json());

application.get("/rotadorodrigo", (requisicao, resposta) => {
  resposta.send("Bem vindo a rota do Rodrigo");
});
//pelo método get - percebe que tanto na tela vai aparecer o nome digitado depois do /
application.get("/listagem/:nome", (requisicao, resposta) => {
  const { nome } = requisicao.params;
  console.log(nome);
  resposta.send(nome);
});
application.listen(3333);
