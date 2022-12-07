const express = require("express");
const Gastos = require("../../models/MODELS_DWI/Gastos");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const gastos = await Gastos.find({ deleteStatus:false });
    res.json(gastos);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const gastos = await Gastos.findById(req.params.id);
    if(gastos == null) return res.status(404).json({message: "No existe este registro de gastosos"})
    res.json(gastos);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  
  try {
    const gastos = new Gastos({
      idUser: req.body.idUser,
      monto: req.body.monto,
      idCatg: req.body.idCatg,
      descripcion: req.body.descripcion
    });

    const gastosaved = await gastos.save();
    res.json(gastosaved);
    // res.send(req.body)
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedGastos = await Gastos.findByIdAndUpdate(req.params.id, {
        idUser: req.body.idUser,
        monto: req.body.monto,
        idCatg: req.body.idCatg,
        descripcion: req.body.descripcion
    }, {new: true});

    res.json(updatedGastos);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/delete/:id", async (req, res) => {
  try {
    const gastosDeleted = await Gastos.findByIdAndUpdate(req.params.id, {
        deleteStatus: true,
    });
    res.json(gastosDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
