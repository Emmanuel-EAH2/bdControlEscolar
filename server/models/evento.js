const mongoose = require('mongoose');
  let Schema = mongoose.Schema;

  let eventosSchema = new Schema({
    
    secundaria:{
        type: Schema.Types.String,
        ref: 'Secundaria',
        required: false
    },
    nombre:{
        type: String,
        required: [false, 'El nombre del evento es requerido']
    },
    dia:{
        type: Date,
        required: [false, 'Cuando se realizará el evento']
    },
    objetivos:{
        type: String,
        required: [false, 'los objetivos son necesarios para el evento']
    },
    materiales:{
        type: String,
        requerid: [false, 'cuales son los materiales que ocuparemos']
    },
    coordinadoresAux:{
        type: String,
        required: false
    },
    estimacionAlumnos:{
        type: Number,
        requerid: [false, 'debe de haber un numero estimado de alumnos']
    },
    actividades:{
        type: String,
        required: [false, 'cuales son las actividades que se realizarán']
    },
    img:{
        type: String,
        required: false
    },
    horaInicio:{
        type: String,
        required: [false, 'a que hora iniciará la actividad']
    },
    horaTermina:{
        type:String,
        required: [false, 'la hora en que finaliza']
    }
  });

  module.exports = mongoose.model('Eventos', eventosSchema);