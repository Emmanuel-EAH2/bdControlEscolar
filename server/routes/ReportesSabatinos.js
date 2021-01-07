const express = require('express');
const app = express();
const Reporte = require('../models/ReportesSabatinos');

/****   GETS    *****/
app.get('/reportes', (req,res)=>{
    Reporte.find({}).exec((err, reporte)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar los reportes',
                err
            });
        } 
        res.json({
                ok: true,
                conteo: Reporte.length,
                message: 'Buena consulta a los REPORTES SABATINOS',
                reportes: reporte 
        });
    });
});
/******* FIN GETS ********/
/********   POST    *********/
app.post('/reportes', (req, res)=>{
    let body = req.body;
    let reporte = new Reporte({
secundaria: body.secundaria,
fecha: body.fecha, 
lectura: body.lectura, 
cita: body.cita, 
horaInicio: body.horaInicio, 
avisosGenerales: body.avisosGenerales,  
mujeresPrimeroPuntuales: body.mujeresPrimeroPuntuales, 
mujeresSegundoPuntuales: body.mujeresSegundoPuntuales, 
mujeresTerceroPuntuales: body.mujeresTerceroPuntuales, 
hombresPrimeroPuntuales: body.hombresPrimeroPuntuales, 
hombresSegundoPuntuales: body.hombresSegundoPuntuales, 
hombresTerceroPuntuales: body.hombresTerceroPuntuales,  
mujeresPrimeroInpuntuales: body.mujeresPrimeroInpuntuales, 
mujeresSegundoInpuntuales: body.mujeresSegundoInpuntuales, 
mujeresTerceroInpuntuales: body.mujeresTerceroInpuntuales, 
hombresPrimeroInpuntuales: body.hombresPrimeroInpuntuales, 
hombresSegundoInpuntuales: body.hombresSegundoInpuntuales, 
hombresTerceroInpuntuales: body.hombresTerceroInpuntuales, 
nombreProfe: body.nombreProfe, 
materia: body.materia, 
horarioClaseI: body.horarioClaseI, 
horarioClaseII: body.horarioClaseII, 
temaImpartido: body.temaImpartido, 
status: body.status, 
etapa: body.etapa, 
actividad: body.actividad, 
horaSalida: body.horaSalida, 
observaciones: body.observaciones, 
nombreCoordi: body.nombreCoordi,
    
    });
    reporte.save((err, reporteNew)=>{
        if(err ){
            return res.status(400).json({
                ok: false,
                message: 'No se pudo ejecutar el POST correctamente',
                err 
            }); 
           }
           res.json({
               ok: true,
               message:'REPORTE SABATINO creado con exito',
               reporte
           });
    });
});
/******     FIN DEL POST     *********/
/********   PUT     *********/

app.put('/reportes/:id', (req,res)=>{
    let id = req.body.id
    Reporte.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data=>{
        if (!data){
            res.status(404).send({
                message: `No se pudo actualizar Alumno con id= ${id}`
            });
        }
        else res.send({ message: "Alumno actualizado correctamente" }); 
    }).catch((err)=>console.log(err));
});

/**********     FIN DEL PUT     *********/

module.exports= app;