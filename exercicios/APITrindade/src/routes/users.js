const {Router} = require('express')
const validateNewUser = require('../middlewares/validate-new-user')
const validateToken = require('../middlewares/validate-token')

const createUsers = require('../controllers/users/createUsers')
const session = require('../controllers/users/session')

const usersRoutes = new Router()

usersRoutes.post("/users",validateToken,validateNewUser,createUsers)
usersRoutes.post("/sessions",session)


module.exports = usersRoutes