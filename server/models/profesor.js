const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let profesSchema= new Schema({
    secundaria:{
        type: Schema.Types.String,
        ref:'Secundaria',
        required: [true, 'debo saber cual secundaria es']
    },
    _id:{
        type: String,
        required: [true, 'El nombre del Profesor es requerido']
    },
    materia:{
        type: Schema.Types.String,
        required: [true, 'La materia que imparte es requerida']
    },
    horarioClaseI:{
        type: String,
        required: [true, 'La hora en que inicia su clase es requerida']
    },
    horarioClaseII:{
        type: String,
        required: [true, 'La hora en que inicia su clase es requerida']
    }
});

module.exports = mongoose.model('Profesores', profesSchema)