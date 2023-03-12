//exercício 7

const adicionarUsuario = (req, res) => {
  const usuario = req.body;
  if (
    !usuario.nome ||
    !usuario.idade ||
    !usuario.cargo ||
    !usuario.senha ||
    Object.keys(usuario).length != 4
  ) {
    return res.status(406).json({
      message:
        "Padrão incorreto de requisição ou dados incompletos para concluir a operação",
    });
  }
  if (usuario.idade < 21) {
    return res
      .status(406)
      .json({ message: "Usuário não possui idade suficiente" });
  } else {
    return res.status(200).json({ mensagem: "Usuario criado com sucesso" });
  }
};

const deletarUsuario = (req, res) => {
  const userId = req.params.id;
  if (parseInt(userId) > 0) {
    return res
      .status(200)
      .json({ mensagem: `Usuário ${userId} deletado com sucesso` });
  } else {
    return res
      .status(406)
      .json({ mensagem: `Está faltando dados para concluir essa operação` });
  }
};

module.exports = { adicionarUsuario, deletarUsuario };
