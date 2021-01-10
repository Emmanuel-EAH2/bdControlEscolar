const express = require('express');
const app = express();
const Profesor = require('../models/profesor');

app.get('/profesores', (req, res)=>{
    Profesor.find({})
    .populate('secundaria', 'coordinador')
    .exec((err, profesor)=>{
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
        conteo:  profesor.length,
        profe: profesor        
       }); 
    });
});

app.get('/profesSantaInes', (req,res)=>{
    Profesor.find({"secundaria": "Santa Ines"})
    .populate('secundaria', 'coordinador')
    .exec((err, SI)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar los Profesores',
                err
            });
        }
     res.json({
        ok:true,
        message: 'buena consulta a los PROFESORES de Santa Ines',
        conteo:  SI.length,
        Profes: SI        
        }); 
    });
});

app.get('/profesSanJuanBautistadeLasalle', (req,res)=>{
    Profesor.find({"secundaria": "San Juan Bautista de Lasalle"}).exec((err, SJBL)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar los Profes de San Juan Bautista de Lasalle',
                err
            });
        }
     res.json({
        ok:true,
        message: 'buena consulta a los PROFES de San Juan Bautista de Lasalle',
        conteo:  SJBL.length,
        Profes: SJBL        
    }); 
  });
});

app.post('/profesores', (req, res)=>{
    let body = req.body;
    let profesor = new Profesor({
    secundaria: body.secundaria,
    _id: body._id,
    materia: body.materia,
    horarioClaseI: body.horarioClaseI,
    horarioClaseII: body.horarioClaseII
    });

    profesor.save((err, profesorNew)=>{
        if(err){
            return res.status(400).json({ 
                ok: false,
                message: 'No se pudo ejecutar el POST correctamente',
                err 
            }); 
           }
           if (!req.body){
            return res.status(400).json({
                ok: false,
                message: 'Rellena todos los campos correctamente',
                err 
            }); 
           }
           res.json({
            ok: true,
            message: 'profesor nuevo FELICIDADES',
            profesorNew
         });
    });
});


app.put('/profesores/:id', (req, res)=>{
    let id = req.params.id
    Profesor.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data =>{
        if (!data){
            res.status(404).send({
                message: `No se pudo actualizar profesor con id= ${id}`
            });
        } else res.send({ message: "PROFESOR actualizado correctamente " });
    }).catch((err)=>console.log(err));
});

app.delete('/profesores/:id', (req,res)=>{
    let id = req.params.id
    Profesor.findByIdAndDelete(id, {useFindAndModify: false}, (err, borrado)=>{
        if(err){
            res.status(400).json({
                     ok: false,
                     message: 'ocurrio un error al momento de borrar al profesor',
                     err
            });
       }
       res.json({ 
           ok:true,
           message: 'profesor eliminado con exito',
           profe: borrado
       });
    });
});

module.exports = app;