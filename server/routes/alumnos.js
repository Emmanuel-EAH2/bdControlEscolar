const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const Alumno = require('../models/alumno');

/**INICIA EL GET****/
app.get('/alumnos', (req, res)=>{
    Alumno.find({})
    .populate('secundaria', 'coordinador')
    .exec((err, alumnado)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar los coordinadores',
                err
            });
        }
     res.json({
     ok:true,
     message: 'buena consulta a los Alumnos',
     conteo:  alumnado.length,
     alumnos: alumnado        
  }); 
 });
});


app.get('/alumnosAct', (req, res)=>{
    Alumno.find({}).populate('secundaria', 'coordinador').exec({estado: true}).then(data =>{
        res.send(data);
    }).catch((error)=>console.log(error));
});

app.get('/alumnos/:id', (req, res)=>{
    let id = req.params.id;
    Alumno.findById(id).then(data =>{
        if (!data)
        res.status(404).send({ message: `No se encontro elemento con id: ${id}`});
        else res.send(data);
    }).catch((error)=>console.log(error));
});


app.get('/AlumnosSantaInes', (req,res)=>{
    Alumno.find({"secundaria": "Santa Ines", estado: true}).exec((err, SI)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar los Alumnos',
                err
            });
        }
     res.json({
        ok:true,
        message: 'buena consulta a los Alumnos de Santa Ines',
        conteo:  SI.length,
        alumnos: SI        
    }); 
  });
});
 
app.get('/alumnosSanJuanBautistadeLasalle', (req,res)=>{
    Alumno.find({"secundaria": "San Juan Bautista de Lasalle", estado: true}).exec((err, SJBL)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar los Alumnos',
                err
            });
        }
     res.json({
        ok:true,
        message: 'buena consulta a los Alumnos de San Juan Bautista de Lasalle',
        conteo:  SJBL.length,
        alumnos: SJBL        
    }); 
  });
});
 
/*****FINALIZA EL GET*****/
/******INICIA EL POST******/
app.post('/alumnos', (req,res)=>{
let body = req.body;
    let alumno = new Alumno({
        secundaria: body.secundaria,
        nombre: body.nombre,
        apellidoP: body.apellidoP,
        apellidoM: body.apellidoM,
        edad: body.edad,
        calle: body.calle,
        colonia: body.colonia,
        numero: body.numero,
        interior: body.interior,
        cp: body.cp,
        celular: body.celular,
        telefono: body.telefono,
        correo: body.correo,
        fec_nac: body.fec_nac,
        lugar_nac: body.lugar_nac,
        primaria: body.primaria,
        secundariaEscolar: body.secundariaEscolar,
        bachillerato: body.bachillerato,
        otroTipo: body.otroTipo,
        instituo: body.instituo,
        especialidad: body.especialidad,
        grado: body.grado,
        grupo: body.grupo,
        horaEntrada: body.horaEntrada,
        horaSalida: body.horaSalida,
        catesismo: body.catesismo,
        otroTipoCate: body.otroTipoCate,
        vocacion: body.vocacion,
        bautismo: body.bautismo,
        confirmacion: body.confirmacion,
        eucaristia: body.eucaristia,
        agrupacion: body.agrupacion,
        calleTrabajo: body.calleTrabajo,
        numeroTrabajo: body.numeroTrabajo,
        coloniaTrabajo: body.coloniaTrabajo,
        telefonoTrabajo: body.telefonoTrabajo,
        cpTrabajo: body.cpTrabajo,
        nombreTrabajo: body.nombreTrabajo,
        horarioTrabajo: body.horarioTrabajo,
        tareasTrabajo: body.tareasTrabajo,
        apellidoPP: body.apellidoPP,
        apellidoPM: body.apellidoPM,
        nombreP: body.nombreP,
        vivep: body.vivep,
        ocupacionP: body.ocupacionP,
        apellidoMP: body.apellidoMP,
        apellidoMM: body.apellidoMM,
        nombreM: body.nombreM,
        vivem: body.vivem,
        ocupacionM: body.ocupacionM,
        casadosIglesia: body.casadosIglesia,
        casadosCivil: body.casadosCivil,
        numHermanos: body.numHermanos,
        edades: body.edades
    }); 

    if(req.body.secundaria != "Santa Ines"){
        return res.status(400).json({
            ok: false,
            message: 'Favor de escribir correctamente el nombre de la secundaria Santa Ines', 
        });
    }
    if (!req.body){
        return res.status(400).json({
            ok: false,
            message: 'Rellena todos los campos correctamente',
            err 
        }); 
       } else alumno.save((err, alumnoNew)=>{ 
        if(err ){
            return res.status(400).json({
                ok: false,
                message: 'No se pudo ejecutar el POST correctamente',
                err 
            }); 
           }
           res.json({
            ok: true,
            message: 'Alumno nuevo FELICIDADES',
            alumnoNew
         });
    });
});
/******FINALIZA EL POST******/
/****INICIA EL PUT*****/
app.put('/alumnos/:id', (req, res)=>{
    let id = req.params.id;
    Alumno.findByIdAndUpdate(id, req.body, { useFindAndModify: false}).then(data => {
        if (!data){
            res.status(404).send({
                message: `No se pudo actualizar Alumno con id= ${id}`
            });
        } else res.send({ message: "Alumno actualizado correctamente " });
    }).catch((err)=>console.log(err));
});
/****TERMINA EL PUT****/
/////////////////EMPIEZA EL DELETE/////////////
app.delete('/alumnos/:id', (req, res)=>{
    let id = req.params.id;
    Alumno.findByIdAndUpdate(id, {estado: false}, { useFindAndModify: false }, (err, alumRemo)=>{
        if(err){
            res.status(400).json({
                     ok: false,
                     message: 'ocurrio un error al momento de borrar un alumno',
                     err
            });
       }
       res.json({ 
           ok:true,
           message: 'alumno eliminado con exito',
           alumno: alumRemo
       });
    }); 
});
///////////////TERMINA EL DELETE/////////////
module.exports = app;