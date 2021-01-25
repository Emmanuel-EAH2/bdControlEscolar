const mongoose = require('mongoose');
  let Schema = mongoose.Schema;


  let eventosSchema = new Schema({
    _id: mongoose.Schema.Types.Number,
    secundaria:{
        type: Schema.Types.String,
        ref: 'Secundaria',
        required: false
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
    horaInicio:{
        type: String,
        required: [false, 'a que hora iniciará la actividad']
    },
    horaTermina:{
        type:String,
        required: [true, 'la hora en que finaliza']
    }
  });


//   let imageSchema = new Schema({
//     img:{
//         type: String
//     },
//     imgfilename:{
//         type: String,
//         required: false
//     },
//     imgpath:{
//         type: String,
//         required: false
//     },
//     imgoriginalname:{
//         type: String,
//         required: false
//     }
//   })

  module.exports = mongoose.model('Eventos', eventosSchema);
//   module.exports = mongoose.model('Image', imageSchema);