const express = require("express");
const Ingresos = require("../../models/MODELS_DWI/Ingresos");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const ingres = await Ingresos.find({ deleteStatus:false });
    res.json(ingres);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const ingres = await Ingresos.findById(req.params.id);
    if(ingres == null) return res.status(404).json({message: "No existe este registro de ingresos"})
    res.json(ingres);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  
  try {
    const ingres = new Ingresos({
      idUser: req.body.idUser,
      monto: req.body.monto,
      idCatg: req.body.idCatg,
      descripcion: req.body.descripcion
    });

    const ingresaved = await ingres.save();
    res.json(ingresaved);
    // res.send(req.body)
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedIngresos = await Ingresos.findByIdAndUpdate(req.params.id, {
        idUser: req.body.idUser,
        monto: req.body.monto,
        idCatg: req.body.idCatg,
        descripcion: req.body.descripcion
    }, {new: true});

    res.json(updatedIngresos);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/delete/:id", async (req, res) => {
  try {
    const ingresDeleted = await Ingresos.findByIdAndUpdate(req.params.id, {
        deleteStatus: true,
    });
    res.json(ingresDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
