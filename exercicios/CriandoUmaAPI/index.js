const express = require('express');
const app = express();
app.use(express.json());

// Importando as rotas de usuários
const usersRoutes = require('./routes/users');

// Definindo a rota raiz da API
app.get('/', (req, res) => {
  res.send('Bem-vindo(a) à API de usuários!');
});

// Usando as rotas de usuários
app.use('/users', usersRoutes);

app.listen(3333, () => {
  console.log('Servidor funcionando');
});