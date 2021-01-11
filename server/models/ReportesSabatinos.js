const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let reporteSchema = new Schema({
    secundaria:{
        type: Schema.Types.String,
        ref: 'Secundaria'
    },
    fecha:{
        type: Date, 
        required: [true, 'es necesario poner la fecha']
    },
    lectura:{
        type: String,
        required: [true, 'se ocupa sbaer la lectura realizada']
    },
    cita:{
        type: String,
        required: [true, 'cual es la cita de la lectura']
    },
    horaInicio:{
        type: String,
        required: [true, 'a que hora inicio la clase']
    },
    avisosGenerales:{
        type: String,
        required: [true, 'Se necesita por lo menos un escrito']
    },
    /***ALUMNOS****/
    /********PUNTUALIDAD********/
        mujeresPrimeroPuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad']
        },
        mujeresSegundoPuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad']
        },
        mujeresTerceroPuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad']
        },
        
        hombresPrimeroPuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad']
        },
        hombresSegundoPuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad']
        },
        hombresTerceroPuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad']
        },
    /********ASISTENCIA*********/
        mujeresPrimeroInpuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad']
        },
        mujeresSegundoInpuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad']
        },
        mujeresTerceroInpuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad']
        },
        
        hombresPrimeroInpuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad']
        },
        hombresSegundoInpuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad']
        },
        hombresTerceroInpuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad']
        },
    /*******PROFESORES*******/
    nombreProfe:{
        type: Schema.Types.String,
        ref: 'Profesores'
    },
    materia:{
        type: Schema.Types.String,
        ref: 'Materias'
    },
    temaImpartidoDogma:{
        type: String,
        required: false
    },
    
    temaImpartidoLiturgiaII:{
        type: String,
        required: false
    },
    temaImpartidoLiturgiaI:{
        type: String,
        required: false
    },
    temaImpartidoOracion:{
        type: String,
        required: false
    },
    temaImpartidoMoralI:{
        type: String,
        required: false
    },
    temaImpartidoMoralII:{
        type: String,
        required: false
    },
    temaImpartidoMoralIII:{
        type: String,
        required: false
    },
    temaImpartidoBibliaIII:{
        type: String,
        required: false
    },
    temaImpartidoBibliaI:{
        type: String,
        required: false
    },
    temaImpartidoBibliaII:{
        type: String,
        required: false
    },
    temaImpartidoVozPapaI:{
        type: String,
        required: false
    },
    temaImpartidoVozPapaII:{
        type: String,
        required: false
    },    
    statusDogma:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido']
    },
  
    statusLiturgiaII:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido']
    },
  
    statusLiturgiaI:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido']
    },
  
    statusOracion:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido']
    },
  
    statusMoralI:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido']
    },
  
    statusMoralII:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido']
    },
  
    statusMoralIII:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido']
    },
  
    statusBibliaIII:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido']
    },
  
    statusBibliaI:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido']
    },
  
    statusBibliaII:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido']
    },
  
    statusVozPapaI:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido']
    },
    statusVozPapaII:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido']
    },
    
    /********AMBIENTACION*******/
    etapa:{
        type: String,
        required: [true, 'En que parte de la ambientacion se encuentran']
    },
    actividad:{
        type: String,
        required: [true, 'cual es la actividad que realizo']
    },
    horaSalida:{
        type: String,
        required: [true, 'A que hora salieron los alumnos']
    },
    observaciones:{
        type: String,
        required: [true, 'es demasiado importante decir cuales son las observaciones que se presentaron'],
        minlength: 20
    },
});

module.exports = mongoose.model('Reporte', reporteSchema)