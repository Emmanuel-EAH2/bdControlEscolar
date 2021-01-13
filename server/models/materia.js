const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let materiaSchema = new Schema({
   secundaria:{  
   type: Schema.Types.String,
   ref: 'Secundaria'
   }, 
   _id:{
    type: String,
    required: false
    },
    profesor:{
        type: String,
        required: [true, 'el nombre del profesor es extremadamente requerido'],
        minlength:7
    }
});

module.exports = mongoose.model('Materias', materiaSchema)