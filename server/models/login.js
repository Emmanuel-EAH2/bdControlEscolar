const mongoose = require('mongoose');

let schema = mongoose.Schema;

let loginSchema = new schema({
    nombre:{
        type: schema.Types.String,
        ref: 'Coordinador'
    },
    password:{
        type: schema.Types.String,
        ref: 'Coordinador'
    },
    password2:{
        type: mongoose.Schema.Types.String,
        ref: 'contraseña'
    } 
});

module.exports = mongoose.model('Login', loginSchema);