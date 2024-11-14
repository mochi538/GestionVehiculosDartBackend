const express = require('express')
const autosControllerRoute = require('../controllers/autosController')
const route = express.Router()

route.get('/autos', autosControllerRoute.vistaAuto)
module.exports = route