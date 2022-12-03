const express = require("express");
const Events = require("../../models/MODELS_GESTION/Eventos");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const events = await Events.find({ eventoDisponible: true });
    res.json(events);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const events = await Events.findById(req.params.id);
    if(events == null) return res.status(404).json({message: "No existe este evento"})
    res.json(events);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  
  try {
    const events = new Events({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      fecha: req.body.fecha,
      boletosDisponibles: req.body.boletosDisponibles,
      boletosReservados: req.body.boletosReservados,
      costoBoleto: req.body.costoBoleto,
      eventoDisponible: req.body.eventoDisponible
    });

    const eventsaved = await events.save();
    res.json(eventsaved);
    // res.send(req.body)
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedEvents = await Events.findByIdAndUpdate(req.params.id, {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        boletosDisponibles: req.body.boletosDisponibles,
        boletosReservados: req.body.boletosReservados,
        costoBoleto: req.body.costoBoleto,
        eventoDisponible: req.body.eventoDisponible
    }, {new: true});

    res.json(updatedEvents);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch("/delete/:id", async (req, res) => {
  try {
    const eventsDeleted = await Events.findByIdAndUpdate(req.params.id, {
      eventoDisponible: false,
    });
    res.json(eventsDeleted);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
