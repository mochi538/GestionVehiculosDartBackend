const Alquiler = require('../model/alquilerModel')

exports.vistaAlquiler = async(req, res)=>{
    try{
        const consulta = await Alquiler.find()
        res.json({consulta})
    } catch(e){
        return res.status(500).json({mensaje: "Error desde el método vista en alquilerController"})
    }
}