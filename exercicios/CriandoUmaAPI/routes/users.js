const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
   res.send('Usuário criado');
});

router.delete('/:id', (req, res) => {
  const userId = req.params.id;
   res.send(`Usuário ${userId} deletado`);
});

module.exports = router;