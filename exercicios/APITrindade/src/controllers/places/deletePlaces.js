const Place = require('../../models/place')

async function deletePlaces (request, response) {
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
  }

  module.exports = deletePlaces