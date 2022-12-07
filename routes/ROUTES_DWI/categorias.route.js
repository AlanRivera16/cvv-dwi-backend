const express = require("express");
const Categrs = require("../../models/MODELS_DWI/Categorias");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const catgs = await Categrs.find({ deleteStatus:false });
    res.json(catgs);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const catgs = await Categrs.findById(req.params.id);
    if(catgs == null) return res.status(404).json({message: "No existe esta categoria"})
    res.json(catgs);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  
  try {
    const catgs = new Categrs({
      idUser: req.body.idUser,
      titulo: req.body.titulo,
      descripcion: req.body.descripcion
    });

    const catgsaved = await catgs.save();
    res.json(catgsaved);
    // res.send(req.body)
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedCategrs = await Categrs.findByIdAndUpdate(req.params.id, {
      idUser: req.body.idUser,
      titulo: req.body.titulo,
      descripcion: req.body.descripcion
    }, {new: true});

    res.json(updatedCategrs);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/delete/:id", async (req, res) => {
  try {
    const catgsDeleted = await Categrs.findByIdAndUpdate(req.params.id, {
        deleteStatus: true,
    });
    res.json(catgsDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
