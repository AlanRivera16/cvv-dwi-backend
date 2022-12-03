const mongoose = require("mongoose");

const ReservSchema = mongoose.Schema({
    email:{
        type: String,

    }, 
    telefono:{
        type: Number,
    }, 
    boletosReservados:{
        type: Number,

    }, 
    totalPago:{
        type: Number,

    }, 
    nombre:{
        type: String,
    }
  }, { timestamps:true});
  
  module.exports = mongoose.model("reserv", ReservSchema);