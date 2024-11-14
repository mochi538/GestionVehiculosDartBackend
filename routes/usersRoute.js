const express = require('express')
const usersControllerRoute = require('../controllers/usersController')
const route = express.Router()

route.get('/users', usersControllerRoute.vistaUsers)

module.exports = route