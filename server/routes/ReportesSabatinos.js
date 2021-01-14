const express = require('express');
const app = express();
const Reporte = require('../models/ReportesSabatinos');

/****   GETS    *****/
app.get('/reportes', (req,res)=>{
    Reporte.find({}).populate('secundaria', 'coordinador')
    .populate('materia', 'secundaria profesor')
    .populate('nombreProfe', 'secundaria materiaImparte')
    .exec((err, reporte)=>{
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

app.get('/reportesSantaInes', (req,res)=>{
    Reporte.find({"secundaria": "Santa Ines"})
    .populate('secundaria', 'coordinador')
    .exec((err, SI)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar los Reportes Sabatinos',
                err
            });
        }
     res.json({
        ok:true,
        message: 'buena consulta a los REPORTES de Santa Ines',
        conteo:  SI.length,
        Reportes: SI.sort()        
       }); 
    });
});

app.get('/reportesSanJuanBautistadeLasalle', (req,res)=>{
    Reporte.find({"secundaria": "San Juan Bautista de Lasalle"})
    .populate('materia', 'secundaria profesor')
    .populate('nombreProfe', 'secundaria materiaImparte')
    .exec((err, SJBL)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar los Reportes de San Juan Bautista de Lasalle',
                err
            });
        }
     res.json({
        ok:true,
        message: 'buena consulta a los Reportes de San Juan Bautista de Lasalle',
        conteo:  SJBL.length,
        Reportes: SJBL        
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
temaImpartidoDogma: body.temaImpartidoDogma,
temaImpartidoLiturgiaII: body.temaImpartidoLiturgiaII,
temaImpartidoLiturgiaI: body.temaImpartidoLiturgiaI,
temaImpartidoOracion: body.temaImpartidoOracion,
temaImpartidoMoralI: body.temaImpartidoMoralI,
temaImpartidoMoralII: body.temaImpartidoMoralII,
temaImpartidoMoralIII: body.temaImpartidoMoralIII,
temaImpartidoBibliaIII: body.temaImpartidoBibliaIII,
temaImpartidoBibliaI: body.temaImpartidoBibliaI,
temaImpartidoBibliaII: body.temaImpartidoBibliaII,
temaImpartidoVozPapaI: body.temaImpartidoVozPapaI,
temaImpartidoVozPapaII: body.temaImpartidoVozPapaII,
temaImpartidoFormaciondeDiri: body.temaImpartidoFormaciondeDiri,
statusDogma: body.statusDogma,
statusLiturgiaII: body.statusLiturgiaII,
statusLiturgiaI: body.statusLiturgiaI,
statusOracion: body.statusOracion,
statusMoralI: body.statusMoralI,
statusMoralII: body.statusMoralII,
statusMoralIII: body.statusMoralIII,
statusBibliaIII: body.statusBibliaIII,
statusBibliaI: body.statusBibliaI,
statusBibliaII: body.statusBibliaII,
statusVozPapaI: body.statusVozPapaI,
statusVozPapaIII: body.statusVozPapaIII,
statusFormaciondeDiri: body.statusFormaciondeDiri,
horarioClaseI: body.horarioClaseI, 
horarioClaseII: body.horarioClaseII,   
etapa: body.etapa, 
actividad: body.actividad, 
horaSalida: body.horaSalida, 
observaciones: body.observaciones    
    });
    
    if (req.body.secundaria != 'Santa Ines') {
        return res.status(400).json({
            ok: false,
            message: 'favor de escribir bien el nombre de la secundaria "Santa Ines"'
        });
    }else reporte.save((err, reporteNew)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                message: 'No se pudo ejecutar el POST correctamente',
                err 
            }); 
           }
           res.json({
               ok: true,
               message:'REPORTE SABATINO creado con exito',
               reporteNew
           });
    });
});
/******     FIN DEL POST     *********/
/********   PUT     *********/

app.put('/reportes/:id', (req,res)=>{
    let id = req.body.id
    Reporte.findByIdAndUpdate(id, req.body, {useFindAndModify: false, new: true, runValidators: true, context: 'query'}).then(data=>{
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