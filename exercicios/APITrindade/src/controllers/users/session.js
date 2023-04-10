const User = require('../../models/user')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function session (request, response) {
    try {
      const userInDatabase = await User.findOne({
        where: {
          username: request.body.username,
        },
      });
      if (!userInDatabase) {
        return response
          .status(404)
          .json({ message: "Username e/ou senha incorretos" });
      }
  
      const passwordIsValid = await bcrypt.compare(
        request.body.password,
        userInDatabase.password
      );
  
      if (!passwordIsValid) {
        return response
          .status(404)
          .json({ message: "Username e/ou senha incorretos" });
      }
  
      const token = jwt.sign(
        {
          id: userInDatabase.id,
        },
        process.env.CHAVE_DO_TOKEN,
        {
          expiresIn: "4h",
        }
      );
      response.json({ username: userInDatabase.username, token: token });
    } catch (error) {
      console.log(error);
      response
        .status(500)
        .json({ message: "Erro: Não conseguimos processar sua solicitação." });
    }
  };

  module.exports = session
