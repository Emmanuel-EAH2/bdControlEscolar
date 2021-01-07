const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let secundariaSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'El nombre es un campo necesario'],
        unique: true
    },
    coordinador:{
        type: String,
        required: [true, 'Es necesario el coordinador']
    },
    clave:{
        type: String,
        required: [true, 'Necesito saber la clave de acceso al sistema']
    }
});

module.exports = mongoose.model('Secundaria', secundariaSchema);