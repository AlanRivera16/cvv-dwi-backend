const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    nombre:{
        type:String,
    }, 
    apellidos:{
        type:String,
    }, 
    correo:{
        type:String,
        required: false,
        unique: true
    }, 
    password:{
        type:String,
        required: false
    }, 
}, { timestamps:true});

module.exports = mongoose.model("usuarios", UserSchema);
