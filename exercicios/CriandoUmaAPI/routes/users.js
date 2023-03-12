const express = require('express');
const router = express.Router();
//post ex 6
/*
router.post('/', (req, res) => {
    res.send('Usuário criado');
});
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
   res.send(`Usuário ${userId} deletado`);
});
*/

// post ex 7

const controller = require('./controller');
// Acessar arquivo controller.js

router.post('/novoUsuario',controller.adicionarUsuario);
router.delete('/deletarUsuario/:id', controller.deletarUsuario);

module.exports = router;
