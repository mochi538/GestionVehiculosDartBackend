const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    marca:{
        type: String,
        require: true
    },
    modelo:{
        type: String,
        require: true
    },
    año:{
        type: Date,
        require: true
    },
    disponibilidad:{
        type: Boolean,
        require: true
    }
})

const Autos = mongoose.model('Autos',schema);
module.exports = Autos;