const mongoose = require("mongoose");

const CatgSchema = mongoose.Schema({
    idUser:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    deleteStatus: {
        type: Boolean,
        default: false
    },
    titulo: String,
    descripcion: String,
}, { timestamps:true});

module.exports = mongoose.model("categorias", CatgSchema);