const {Router} = require('express')
const validateToken = require('../middlewares/validate-token')

const createPlaces = require('../controllers/places/createPlaces')
const findPlaces = require('../controllers/places/findPlaces')
const deletePlaces = require('../controllers/places/deletePlaces')
const updatePlaces = require('../controllers/places/updatePlaces')

const placesRoutes = new Router()

placesRoutes.post('/places',validateToken,createPlaces)
placesRoutes.get('/places',validateToken,findPlaces)
placesRoutes.delete('/places/:id',validateToken,deletePlaces)
placesRoutes.put('/places/:id',validateToken,updatePlaces)

module.exports = placesRoutes