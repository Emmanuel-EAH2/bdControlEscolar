const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let coordiSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    password:{
        type: String,
        required: [true, 'La contraseña es requerida']
    },
    password2:{
        type: String,
        required: [true, 'Volver a escribir la contraseña']
    },
    secundaria:{
        type: String,
        required: [true, 'Ocupo saber de que secundaria es']
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Coordinador', coordiSchema);