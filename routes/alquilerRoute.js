const express = require('express')
const alquilerControllerRoute = require('../controllers/alquilerController')
const route = express.Router()

route.get('/alquiler', alquilerControllerRoute.vistaAlquiler)
module.exports = route