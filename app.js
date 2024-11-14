const express = require("express");
const app = express();
const PORT = process.env.PORT || 5003;
require("dotenv").config();

const alquilerRouter = require("./routes/alquilerRoute");
const autosRouter = require("./routes/autosRoute");
const usersRouter = require("./routes/usersRoute");

const conexionDB = require("./config/db");
conexionDB();

app.use(express.json());

app.use("/api", alquilerRouter);
app.use("/api", autosRouter);
app.use("/api", usersRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
