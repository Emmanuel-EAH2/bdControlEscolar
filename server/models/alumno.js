const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let alumnoSchema = new Schema({
    secundaria:{
        type: Schema.Types.String,
        ref: 'Coordinador'
    },
    nombre:{
        type: String,
        required: [true, 'El nombre del alumno es necesario']
    },
   apellidoP:{
    type: String,
    required: [true, 'El apellido Paterno del alumno es necesario']
   },   
   apellidoM:{
    type: String,
    required: [true, 'El apellido Materno del alumno es necesario']
   },
   edad:{
       type: Number,
       required: [true, 'La edad del alumno es necesario']
   },
   calle:{
    type: String,
    required: [true, 'la calle del domicilio del alumno es necesario']
   },
   numero:{
    type: Number,
    required: [true, 'Elnumero de la calle del domicilio del alumno es necesario']
   },
   colonia:{
    type: String,
    required: [true, 'la colonia del domicilio del alumno es necesario']
   },
   cp:{
    type: String,
    required: [true, 'El codigo postal del domicilio del alumno es necesario']
   },
   celular:{
    type: Number,
    required: false
   },
   telefono:{
    type: Number,
    required: false
   },
   correo:{
    type: String,
    required: [true, 'El correo electronico del alumno es necesario']
   },
   fec_nac:{
    type: Date,
    required: [true, 'La fecha de nacimiento del alumno es necesario']
   },
   lugar_nac:{
       type: String,
       required: false
   },
   /**ESOS FUERON LOS DATOS PERSONALES DEL ALUMNO****/
   /***AHORA SIGEN LOS ESTUDIOS REALIZADOS PARA LA VIDA LAICAL*****/
   primaria:{
       type: Number,
       required: [true, 'es necesario saber en que grado va de la primaria']
   },
   secundariaEscolar:{
    type: Number,
    required: [true, 'es necesario saber en que grado va de la secundaria']
   },
   bachillerato:{
    type: Number,
    required: [true, 'es necesario saber en que grado va de la prepa']
   },
   otroTipo:{
    type: String,
    required: false
   },
   instituo:{
    type: String,
    required: [true, 'Necesito saber en que instituto esta estudiando']
   },
   especialidad:{
    type: String,
    required: false
   },
   grado:{
    type: String,
    required: false
   },
   grupo:{
    type: String,
    required: false
   },
   horaEntrada:{
       type: String,
       required: false
   },
   horaSalida:{
       type: String,
       required: false
   },
   /***FINALIZAN LOS ESTUDIOS REALIZADOS PARA LA VIDA LAICAL*****/
   /***AQUI INICIAN LOS ESTUDIOS REALIZADOS PARA LA VIDA ETERNA*****/
   catesismo:{
    type: Number,
    required: [true, 'es necesario saber en que grado va del catesismo']
   },
   otroTipoCate:{
       type: String,
       required: false
   },
   
});

module.exports = mongoose.model('Alumno', alumnoSche