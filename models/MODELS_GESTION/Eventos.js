const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
    nombre:{
        type: String,
    }, 
    descripcion:{
        type: String,
    }, 
    fecha:{
        type: Date,
    }, 
    boletosDisponibles:{
        type: Number,
    }, 
    boletosReservados:{
        type: Number,
    },
    costoBoleto:{
        type: Number,
    },
    eventoDisponible:{
        type: Boolean,
        default: true
    }
  }, { timestamps:true});
  
  module.exports = mongoose.model("events", EventSchema);