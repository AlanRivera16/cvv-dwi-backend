const express = require("express");
const Reservs = require("../../models/MODELS_GESTION/Reservaciones");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const reservs = await Reservs.find();
    res.json(reservs);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const reservs = await Reservs.findById(req.params.id);
    if(reservs == null) return res.status(404).json({message: "No existe esta reservación"})
    res.json(reservs);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  
  try {
    const reservs = new Reservs({
        email: req.body.email,
        telefono: req.body.telefono,
        boletosReservados: req.body.boletosReservados,
        totalPago: req.body.totalPago,
        nombre: req.body.nombre,
    });

    const reservsaved = await reservs.save();
    res.json(reservsaved);
    // res.send(req.body)
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedReservs = await Reservs.findByIdAndUpdate(req.params.id, {
        email: req.body.email,
        telefono: req.body.telefono,
        boletosReservados: req.body.boletosReservados,
        totalPago: req.body.totalPago,
        nombre: req.body.nombre,
    }, {new: true});

    res.json(updatedReservs);
  } catch (error) {
    res.status(500).send(error);
  }
});

// router.patch("/delete/:id", async (req, res) => {
//   try {
//     const reservsDeleted = await Reservs.findByIdAndUpdate(req.params.id, {
//       eventoDisponible: false,
//     });
//     res.json(reservsDeleted);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

module.exports = router;
