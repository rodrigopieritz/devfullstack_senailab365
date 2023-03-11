const express = require("express");
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  response.send("servidor está funcionando");
});

// exercício 4
app.get('/enviar/:nome', (request, response) => {
  let nome = request.params.nome;
  response.send(`Rota de API criada pelo: ${nome}`);
  console.log(`Console - Rota de API criada pelo: ${nome}`);
});

app.listen(3333, () => {
  console.log("servidor está funcionando!");
});
