require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");


const connection = require("./src/database");
const Place = require("./src/models/place");
const User = require("./src/models/user");

const validateToken = require("./src/middlewares/validate-token");

const app = express();
app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

//CADASTRAR LOCAIS (PLACES)

app.post("/places",validateToken, async (request, response) => {
  try {
    const data = {
      name: request.body.name,
      contact: request.body.contact,
      opening_hours: request.body.opening_hours,
      description: request.body.description,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
    };

    const place = await Place.create(data);

    response.status(201).json(place);
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .json({ message: "Não foi possivel concluir a operação, verificar log" });
  }
});

//EXIBIR LOCAIS (PLACES)

app.get("/places",validateToken, async (request, response) => {
  try {
    const places = await Place.findAll();
    return response.json(places);
  } catch (error) {}
});

//DELETAR LOCAIS (PLACES)

app.delete("/places/:id",validateToken, async (request, response) => {
  try {
    await Place.destroy({
      where: {
        id: request.params.id,
      },
    });
    response.status(200).json({ message: "Local deletado com sucesso" });
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .json({ message: "Não foi possivel concluir a operação, verificar log" });
  }
});

//ATUALIZAR LOCAIS (PLACES)

app.put("/places/:id",validateToken, async (request, response) => {
  try {
    const placeIndDatabase = await Place.findByPk(request.params.id);

    if (!placeIndDatabase) {
      return response
        .status(404)
        .json({ message: "Local não encontrado, informe um ID válido" });
    }
    placeIndDatabase.name = request.body.name;
    placeIndDatabase.contact = request.body.contact;
    placeIndDatabase.opening_hours = request.body.opening_hours;
    placeIndDatabase.description = request.body.description;
    placeIndDatabase.latitude = request.body.latitude;
    placeIndDatabase.longitude = request.body.longitude;

    await placeIndDatabase.save();
    response.json(placeIndDatabase);
  } catch (error) {
    console.log(error);
    response
      .status(500)
      .json({ message: "Não foi possivel concluir a operação, verificar log" });
  }
});

//CADASTRO DE USUÁRIOS

app.post("/users",validateToken, async (request, response) => {
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
    const checkPassword = { password: request.body.password };
    if (checkPassword.password.length < 8) {
      return response
        .status(409)
        .json({ message: "A senha deve possuir mais do que 8 dígitos" });
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
});
//LOGIN DE USUÁRIO (SESSIONS)
app.post("/sessions", async (request, response) => {
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
});

//CONECÇÃO AO SERVIDOR

app.listen(3333, () => {
  console.log("Servidor rodando");
});
