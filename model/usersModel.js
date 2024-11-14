const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    correo:{
        type: String,
        require: true
    },
    numLicencia:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
})

const Users = mongoose.model('Users',schema)
module.exports = Users