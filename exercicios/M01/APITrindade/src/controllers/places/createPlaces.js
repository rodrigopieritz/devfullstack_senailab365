const Place = require('../../models/place')

async function createPlace (request, response) {
    try {
      const data = {
        name: request.body.name,
        contact: request.body.contact,
        opening_hours: request.body.opening_hours,
        description: request.body.description,
        latitude: request.body.latitude,
        longitude: request.body.longitude,
      };
  
      const place = await Place.create(data);
  
      response.status(201).json(place);
    } catch (error) {
      console.log(error);
      response
        .status(500)
        .json({ message: "Não foi possivel concluir a operação, verificar log" });
    }
  }

  module.exports = createPlace