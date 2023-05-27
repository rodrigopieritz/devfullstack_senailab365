const yup = require("yup");

const validation = yup.object().shape({
    username: yup
      .string("Username deve ser uma string")
      .required("Username é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required("Senha é obrigatória")
  })
  
  function validateNewUser(request, response, next) {
     
    try {
      validation.validateSync(request.body)
      next()
    } catch (error) {
      response.status(400).json({ message: error.message })
    }
  }
  
  module.exports = validateNewUser

