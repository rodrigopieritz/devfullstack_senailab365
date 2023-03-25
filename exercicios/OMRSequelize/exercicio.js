const Sequelize = require("sequelize");
const database = require("./db");
const Exercicio = database.define("exercicio", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  aluno: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: Sequelize.STRING,
  matricula: Sequelize.DECIMAL,
});

module.exports = Exercicio;
