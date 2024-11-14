const Users = require('../model/usersModel')

exports.vistaUsers = async(req, res)=>{
    try{
        const consulta = await Users.find()
        res.json({consulta})
    } catch(e){
        return res.status(500).json({mensaje: "Error desde el método vista en usersController"})
    }
}
