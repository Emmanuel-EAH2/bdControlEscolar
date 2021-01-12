const mongoose = require('mongoose');
  let Schema = mongoose.Schema;

  let eventosSchema = new Schema({
    
    secundaria:{
        type: Schema.Types.String,
        ref: 'Secundaria',
        required: true
    },
    nombre:{
        type: String,
        required: [true, 'El nombre del evento es requerido']
    },
    dia:{
        type: Date,
        required: [true, 'Cuando se realizará el evento']
    },
    objetivos:{
        type: String,
        required: [true, 'los objetivos son necesarios para el evento']
    },
    materiales:{
        type: String,
        requerid: [true, 'cuales son los materiales que ocuparemos']
    },
    coordinadoresAux:{
        type: String,
        required: false
    },
    estimacionAlumnos:{
        type: Number,
        requerid: [true, 'debe de haber un numero estimado de alumnos']
    },
    actividades:{
        type: String,
        required: [true, 'cuales son las actividades que se realizarán']
    },
    img:{
        type: String,
        required: false
    },
    horaInicio:{
        type: String,
        required: [true, 'a que hora iniciará la actividad']
    },
    horaTermina:{
        teype:String,
        required: [true, 'la hora en que finaliza']
    }

  });

  module.exports = mongoose.model('Eventos', eventosSchema);