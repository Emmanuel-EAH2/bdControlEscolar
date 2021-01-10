const mongoose = require('mongoose');
const { unique } = require('underscore');
const Schema = mongoose.Schema;

let secundariaSchema = new Schema({
    _id:{
        type: String,
        required: [true, 'El Id es sumamene requerido'],
        unique: true
    },
    coordinador:{
        type: String,
        required: [true, 'Es necesario el coordinador'],
        unique: true
    },
    clave:{
        type: String,
        required: [true, 'Necesito saber la clave de acceso al sistema'],
        unique: true
    }
});

module.exports = mongoose.model('Secundaria', secundariaSchema);