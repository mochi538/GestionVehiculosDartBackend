 const Autos = require('../model/autosModel')

 exports.vistaAuto = async(req, res)=>{
    try{
        const consulta = await Autos.find()
        res.json({consulta})
    } catch(e){
        return res.status(500).json({mensaje: "Error desde el método vista en autosController"})
    }
}