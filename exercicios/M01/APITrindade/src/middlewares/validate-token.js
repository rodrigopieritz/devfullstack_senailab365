const jwt = require("jsonwebtoken");

function validateToken(request, response, next) {
  const token = request.headers.authorization;

  if (!token || token === "Bearer") {
    return response.status(403).json({ message: "Token não está presente" });
  }

  const tokenJwt = token.slice(7);

  jwt.verify(
    tokenJwt,
    process.env.CHAVE_DO_TOKEN,
    function (error, conteudoDescodificado) {
      if (error) {
        if (error.name === "TokenExpiredError") {
          return response.status(401).json({ error: "Token expirou" });
        } else if (error.name === "JsonWebTokenError") {
          return response.status(401).json({ error: "Token inválido" });
        } else {
          return response.status(500).json({
            error: "Erro: Não conseguimos processar sua solicitação.",
          });
        }
      } else {
        console.log(conteudoDescodificado);
        request.body.userId = conteudoDescodificado.id;
        return next();
      }
    }
  );
}

module.exports = validateToken