const mongoose = require("mongoose");

const IngresoSchema = mongoose.Schema({
    monto:Number,
    descripcion: String,
    idUser:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    idCatg: {
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    deleteStatus: {
        type: Boolean,
        default: false
    },
}, { timestamps:true});

module.exports = mongoose.model("ingresos", IngresoSchema);