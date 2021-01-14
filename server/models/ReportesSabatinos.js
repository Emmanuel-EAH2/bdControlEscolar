const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let reporteSchema = new Schema({
    secundaria:{
        type: Schema.Types.String,
        ref: 'Secundaria',
        required: [true, 'ES OBLIGATORIO PONER LA SECUNDARIA']
    },
    fecha:{
        type: Date, 
        required: [true, 'es necesario poner la fecha'],
        maxlength: 11        
    },
    lectura:{
        type: String,
        required: [true, 'se ocupa sbaer la lectura realizada'],
        minlength: 10
    },
    cita:{
        type: String,
        required: [true, 'cual es la cita de la lectura'],
        minlength:4
    },
    horaInicio:{
        type: String,
        required: [true, 'a que hora inicio la clase'],
        maxlength: 6
    },
    avisosGenerales:{
        type: String,
        required: [true, 'Se necesita por lo menos un escrito'],
        minlength: 6
    },
    /***ALUMNOS****/
    /********PUNTUALIDAD********/
        mujeresPrimeroPuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad'],
            minlength: 1,
            maxlength: 2
        },
        mujeresSegundoPuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad'],
            minlength: 1,
            maxlength: 2
        },
        mujeresTerceroPuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad'],
            minlength: 1,
            maxlength: 2
        },
        
        hombresPrimeroPuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad'],
            minlength: 1,
            maxlength: 2
        },
        hombresSegundoPuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad'],
            minlength: 1,
            maxlength: 2
        },
        hombresTerceroPuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad'],
            minlength: 1,
            maxlength: 2
        },
    /********ASISTENCIA*********/
        mujeresPrimeroInpuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad'],
            minlength: 1,
            maxlength: 2
        },
        mujeresSegundoInpuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad'],
            minlength: 1,
            maxlength: 2
        },
        mujeresTerceroInpuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad'],
            minlength: 1,
            maxlength: 2
        },
        
        hombresPrimeroInpuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad'],
            minlength: 1,
            maxlength: 2
        },
        hombresSegundoInpuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad'],
            minlength: 1,
            maxlength: 2
        },
        hombresTerceroInpuntuales:{
            type:Number,
            required: [true, 'requiero saber la cantidad'],
            minlength: 1,
            maxlength: 2
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

    temaImpartidoFormaciondeDiri:{
        type: String,
        required: false
    },
        
    statusDogma:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido'],
        maxlength: 1
    },
  
    statusLiturgiaII:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido'],
        maxlength: 1
    },
  
    statusLiturgiaI:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido'],
        maxlength: 1
    },
  
    statusOracion:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido'],
        maxlength: 1
    },
  
    statusMoralI:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido'],
        maxlength: 1
    },
  
    statusMoralII:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido'],
        maxlength: 1
    },
  
    statusMoralIII:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido'],
        maxlength: 1
    },
  
    statusBibliaIII:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido'],
        maxlength: 1
    },
  
    statusBibliaI:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido'],
        maxlength: 1
    },
  
    statusBibliaII:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido'],
        maxlength: 1
    },
  
    statusVozPapaI:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido'],
        maxlength: 1
    },
    statusVozPapaIII:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido'],
        maxlength: 1
    },

    statusFormaciondeDiri:{
        type: String,
        required: [true, 'se requiere saber si Asistio o si falto o algo parecido'],
        maxlength: 1
    },
    
    
    /********AMBIENTACION*******/
    etapa:{
        type: String,
        required: [true, 'En que parte de la ambientacion se encuentran'],
        minlength: 5
    },
    actividad:{
        type: String,
        required: [true, 'cual es la actividad que realizo'],
        minlength: 5
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