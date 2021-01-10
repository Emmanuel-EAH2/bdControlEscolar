const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let materiaSchema = new Schema({
   secundaria:{  
   type: Schema.Types.String,
   ref: 'Secundaria'
   }, 
   _id:{
    type: String,
    required: [true, 'El nombre de la materia es requerido']
    },
    profesor:{
        type: Schema.Types.String,
        ref: 'Profesores'
    }
});

module.exports = mongoose.model('Materias', materiaSchema)