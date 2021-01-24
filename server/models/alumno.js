const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let alumnoSchema = new Schema({
    secundaria:{
        type: Schema.Types.String,
        ref: 'Secundaria'
    },
    _id:{
        type: Number,
        required: [true, 'Es necesario saber el folio del alumno'],
    },
   nombre:{
        type: String,
        required: [true, 'El nombre del alumno es necesario'],
        minlength: 3
    },
   apellidoP:{
    type: String,
    required: [true, 'El apellido Paterno del alumno es necesario'],
    minlength: 3
   },   
   apellidoM:{
    type: String,
    required: [true, 'El apellido Materno del alumno es necesario'],
    minlength: 3
   },
   edad:{
       type: Number,
       required: [true, 'La edad del alumno es necesario'],
       minlength: 2
   },
   calle:{
    type: String,
    required: [true, 'la calle del domicilio del alumno es necesario'],
    minlength: 3
   },
   numero:{
    type: Number,
    required: [true, 'Elnumero de la calle del domicilio del alumno es necesario'],
    minlength: 3
   },
   interior:{
    type: String,
    required:false
   },
   colonia:{
    type: String,
    required: [true, 'la colonia del domicilio del alumno es necesario'],
    minlength: 3
   },
   cp:{
    type: String,
    required: [true, 'El codigo postal del domicilio del alumno es necesario'],
    minlength: 3
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
    required: [true, 'El correo electronico del alumno es necesario'],
    minlength: 3
   },
   fec_nac:{
    type: Date,
    required: [true, 'La fecha de nacimiento del alumno es necesario'],
    minlength: 3
   },
   lugar_nac:{
       type: String,
       required: false
   },
   /**ESOS FUERON LOS DATOS PERSONALES DEL ALUMNO****/
   /***AHORA SIGEN LOS ESTUDIOS REALIZADOS PARA LA VIDA LAICAL*****/
   primaria:{
       type: Number,
       required: [true, 'es necesario saber en que grado va de la primaria'],
       minlength: 1
   },
   secundariaEscolar:{
    type: Number,
    required: [true, 'es necesario saber en que grado va de la secundaria'],
    minlength: 1
   },
   bachillerato:{
    type: Number,
    required: false
   },
   otroTipo:{
    type: String,
    required: false
   },
   instituo:{
    type: String,
    required: [true, 'Necesito saber en que instituto esta estudiando'],
    minlength: 3
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
    required: [true, 'es necesario saber en que grado va del catesismo'],
    minlength: 1
   },
   otroTipoCate:{
       type: String,
       required: false
   },
   vocacion:{
       type:String,
       required: false
   },
   /***FINALIZAN LOS ESTUDIOS REALIZADOS PARA LA VIDA ETERNA*****/
   /***AQUI INICIAN LAS OCUPACIONES DIVERSAS*****/
   agrupacion:{
       type: String,
       required: false
   },
   bautismo:{
    type: String,
    required: false
   },
   confirmacion:{
    type: String,
    required: false
   },
   eucaristia:{
    type: String,
    required: false
   },
   /*****LUGAR DE TRABAJO*****/
   calleTrabajo:{
       type: String,
       required: false
   },
   numeroTrabajo:{
       type: Number,
       required: false
   },
   coloniaTrabajo:{
       type: String,
       required: false
   },
   cpTrabajo:{
       type: String,
       required: false
   },
   telefonoTrabajo:{
       type: Number,
       required: false
   },
   nombreTrabajo:{
       type: String,
       required: false
   },
   horarioTrabajo:{
       type: String,
       required: false
   },
   tareasTrabajo:{
       type: String,
       required: false
   },
      /***FINALIZAN LAS OCUPACIONES DIVERSAS*****/
   /***AQUI INICIAN LOS DATOS DE LOS FAMILIARES*****/
   /***papa***/
   apellidoPP:{
    type: String,
    required: [true, 'Esnecesario saber el apellido paterno'],
    minlength: 3
   },
   apellidoPM:{
    type: String,
    required: [true, 'Esnecesario saber el apellido materno'],
    minlength: 3
   },
   nombreP:{
    type: String,
    required: [true, 'Ocupo saber el nombre del papa'],
    minlength: 3
   },
   vivep:{
       type: String,
       required: [true, 'Ocupo saber si esta vivo'],
       minlength: 2
   },
   ocupacionP:{
    type: String,
    required: false
   },
   /**FINALIZA PAPA**/
   /***MAMA***/
   apellidoMP:{
    type: String,
    required: [true, 'Esnecesario saber el apellido paterno'],
    minlength: 3
   },
   apellidoMM:{
    type: String,
    required: [true, 'Esnecesario saber el apellido materno'],
    minlength: 3
   },
   nombreM:{
    type: String,
    required: [true, 'Ocupo saber el nombre del papa'],
    minlength: 3
   },
   vivem:{
       type: String,
       required: [true, 'Ocupo saber si esta vivo'],
       minlength: 2
   },
   ocupacionM:{
    type: String,
    required: false
   },
   /**FINALIZA MAMA**/
   casadosIglesia:{
       type: String,
       required: [true, 'Ocupo saber si estan casados por la Iglesia'],
       minlength: 2
   },
   casadosCivil:{
       type: String,
       required: [true, 'Ocupo saber si estan casados por el civil'],
       minlength: 2
   },
   numHermanos:{
       type:Number,
       required: [true, 'necesito saber cuantos hermanos tiene'],
       minlength: 1
   },
   edades:{
       type:String,
       required:false
   },
   estado:{
       type: Boolean,
       default: true
   }
});

module.exports = mongoose.model('Alumno', alumnoSchema)