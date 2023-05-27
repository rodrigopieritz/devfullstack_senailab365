const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

async function createUsers(request, response) {
  try {
    const userInDatabase = await User.findOne({
      where: {
        [Op.or]: [
          { email: request.body.email },
          { username: request.body.username },
        ],
      },
    });
    if (userInDatabase) {
      return response
        .status(409)
        .json({ message: "Erro: E-mail e/ou Username já possuem uma conta" });
    }
    const hash = await bcrypt.hash(request.body.password, 10);
    const newUser = {
      name: request.body.name,
      email: request.body.email,
      username: request.body.username,
      password: hash,
    };
    const { username } = await User.create(newUser);
    response.status(201).json({ username });
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .json({ message: "Erro: Não conseguimos processar sua solicitação." });
  }
}

module.exports = createUsers;
