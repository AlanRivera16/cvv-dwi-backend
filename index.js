const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoute = require("./routes/todos");
const currRoute = require("./routes/curriculum.route")
const userRoute = require("./routes/users.route")
const eventosRoute = require("./routes/ROUTES_GESTION/eventos.route");
const reversRoute = require("./routes/ROUTES_GESTION/reservaciones")
const usuariosRoute = require("./routes/ROUTES_DWI/users.route")
const categRoute = require("./routes/ROUTES_DWI/categorias.route")
const ingresRoute = require("./routes/ROUTES_DWI/ingresos.route")
const gastosRoute = require("./routes/ROUTES_DWI/gastos.route")
require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/todos", todoRoute);
app.use("/curriculum", currRoute);
app.use("/users", userRoute);
app.use("/events", eventosRoute);
app.use("/reservs", reversRoute);
app.use("/usuarios", usuariosRoute);
app.use("/categorias", categRoute);
app.use("/ingresos", ingresRoute);
app.use("/gastos", gastosRoute);

const mongoUri = process.env['MONGODB_URI'];

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("connected to mongo");
  })
  .catch((error) => {
    console.log({ error });
  });

app.listen(process.env.PORT || 3000);
console.log('server up on port', (process.env.PORT || 3000))
