require("dotenv").config();
const express = require("express");
const connection = require("./src/database");

const placesRoutes = require('./src/routes/places');
const usersRoutes = require("./src/routes/users");

const app = express();
app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

app.use(placesRoutes)
app.use(usersRoutes)

app.listen(3333, () => {
  console.log("Servidor rodando");
});
