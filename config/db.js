const mongoose = require("mongoose");
const DATABASE =
  "mongodb+srv://mochi5384:AALTBTPX_X@cluster0.rkfo3qm.mongodb.net/GestionAutos?retryWrites=true&w=majority&appName=Cluster0";
const conexionDB = async () => {
  try {
    mongoose.connect(DATABASE);
    console.log("Base de datos conectada correctamente");
  } catch (e) {
    console.log("Error X_X");
  }
};

module.exports = conexionDB;
