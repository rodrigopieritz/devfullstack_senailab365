const express = require("express");
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

// exercicio  7

const controller = require("./controller");
// Acessar arquivo controller.js

//exercicio 8

function middlewareCargo(req, res, next) {
  const validacaoUsuario = req.body;
  if (validacaoUsuario.cargo !== "líder") {
    return res
      .status(400)
      .json({ menssage: "Usuário não possui cargo suficiente" });
  }
  next();
}

// continuação exercicio 7

router.post("/novoUsuario", middlewareCargo, controller.adicionarUsuario);
router.delete("/deletarUsuario/:id", controller.deletarUsuario);

module.exports = router;
