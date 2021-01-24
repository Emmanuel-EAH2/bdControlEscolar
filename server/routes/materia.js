const express = require('express');
const app = express();
const Materia = require('../models/materia');

app.get('/materias', (req, res)=>{
    Materia.find({})
    .populate('secundaria', 'coordinador')
    .populate('profesor', 'secundaria materiaImparte')
    .exec((err, materias)=>{
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
        conteo: materias.length,
       materias:  materias        
       }); 
    });
});

app.get('/materiasSantaInes', (req,res)=>{
    Materia.find({"secundaria": "Santa Ines"})
    .populate('secundaria', 'coordinador')
    .exec((err, SI)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar las Materias',
                err
            });
        }
     res.json({
        ok:true,
        message: 'buena consulta a las MATERIAS de Santa Ines',
        conteo:  SI.length,
        Materias: SI.sort()      
       }); 
    });
});

app.get('/materiasSanJuanBautistadeLasalle', (req,res)=>{
    Materia.find({"secundaria": "San Juan Bautista de Lasalle"}).exec((err, SJBL)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar las Materias de San Juan Bautista de Lasalle',
                err
            });
        }
     res.json({
        ok:true,
        message: 'buena consulta a las Materias de San Juan Bautista de Lasalle',
        conteo:  SJBL.length,
        Materias: SJBL        
    }); 
  });
});

app.post('/materias', (req, res)=>{
    let body = req.body;
    let materias = new Materia({
      secundaria: body.secundaria,
      _id: body._id,
      profesor: body.profesor,
    });
    if (!req.body){
        return res.status(400).json({
            ok: false,
            message: 'Rellena todos los campos correctamente',
            err 
        }); 
       } else
    materias.save((err, materiasNew)=>{
        if(err){
            return res.status(400).json({ 
                ok: false,
                message: 'No se pudo ejecutar el POST correctamente',
                err 
            }); 
           }
           res.json({
            ok: true,
            message: 'nueva MATERIA FELICIDADES',
            materiasNew
        });
    });
});

app.put('/materias/:id', (req,res)=>{
    let id = req.params.id
    let profesor = req.body.profesor
    Materia.findByIdAndUpdate(id, req.body, {useFindAndModify: false, new: true, runValidators: true , context: 'query'}).then(data =>{
        if (!data){
            res.status(404).send({
                message: `No se pudo actualizar Materia con id= ${id}`
            });
        } 
        if (!profesor) {
            res.status(400).send({
                message: 'Por favor ingresa algo, no puede estar vacio'
            });
        }  
        else res.send({ message: "Materia actualizada correctamente" });
    }).catch((error)=>console.log(error)); 
});

module.exports = app;