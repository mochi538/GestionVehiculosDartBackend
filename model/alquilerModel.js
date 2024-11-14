const mongoose =  require('mongoose')

const schema = new mongoose.Schema({
    fechaInicio: {
        type: Date,
        require: true
    },
    fechaFin: {
        type: Date,
        require: true
    },
    auto: {
        type: Object,
        require: true
    },
    user: {
        type: Object,
        require: true
    },
})
const Alquiler = mongoose.model('Alquiler',schema)
module.exports = Alquiler;