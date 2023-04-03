const express = require('express')
const connection = require('./src/database')

const PLace = require('./src/models/place')//ex2
const app = express()

connection.authenticate()
connection.sync({alter: true})//ex2

app.listen(3333,()=>{
    console.log("servidor rodando na porta 3333")
})