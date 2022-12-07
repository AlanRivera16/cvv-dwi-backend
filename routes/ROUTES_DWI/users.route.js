const express = require("express");
const Usuarios = require("../../models/MODELS_DWI/Users");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuarios.find({ });
    res.json(usuarios);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const usuarios = await Usuarios.findById(req.params.id);
    if(usuarios == null) return res.status(404).json({message: "No existe este usuario"})
    res.json(usuarios);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  
  try {
    const usuarios = new Usuarios({
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      correo: req.body.correo,
      password: req.body.password
    });

    const usuariosaved = await usuarios.save();
    res.json(usuariosaved);
    // res.send(req.body)
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedUsuarios = await Usuarios.findByIdAndUpdate(req.params.id, {
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      correo: req.body.correo,
      password: req.body.password
    }, {new: true});

    res.json(updatedUsuarios);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/delete/:id", async (req, res) => {
  try {
    const usuariosDeleted = await Usuarios.findByIdAndUpdate(req.params.id, {
      disponible: false,
    });
    res.json(usuariosDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
