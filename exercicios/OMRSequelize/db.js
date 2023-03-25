const Sequelize = require('sequelize')
const sequelize = new Sequelize('trindade','postgres','senai',{
dialect:'postgres',
host:'localhost',
port:'5432'
})

module.exports= sequelize;