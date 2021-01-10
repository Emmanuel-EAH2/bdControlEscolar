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
    horarioClaseI:{
        type: String,
        required: [true, 'Ocupo saber a que hora inicio la clase']
    },
    horarioClaseII:{
        type: String,
        required: [true, 'Ocupo saber a que hora inicio la clase']
    },
    temaImpartido:{
        type: String,
        required: [true, 'se requiere saber el tema que impartio']
    },
    status:{
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