const Place = require('../../models/place')

async function updatePlaces (request, response) {
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
  };

  module.exports = updatePlaces