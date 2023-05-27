const connection = require("../database");
const Sequelize = require('sequelize')

const User = connection.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
     },
     name: {
        type: Sequelize.STRING,
        allowNull: false
     },
     email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
     password: {
        type: Sequelize.STRING,
        allowNull: false,
        min:8
     }
})

module.exports = User