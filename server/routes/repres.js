const express = require('express');
const app = express();
const Repre = require('../models/repres');

app.get('/repres', (req,res)=>{
    Repre.find({})
    .populate('folio', 'nombre nombreP nombreM edad calle colonia numero cp correo lugar_nac secundaria')
    .exec((err, repre)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar los coordinadores',
                err
            });
        }
        res.json({
            ok: true,
            message: 'Buena consulta a los repres de Santa Ines',
            conteo: repre.length,
            repre
        });
    });
});

app.post('/repres', (req, res)=>{
    let body = req.body;
    let repre = new Repre({
          folio: body.folio,
          grado: body.grado
    });
    if(req.body.folio._id == null){
        return res.json({
         ok:false,
        message: 'favor de introducir un folio que exista'
        });
    }
    if (!req.body){
        return res.status(400).json({
            ok: false,
            message: 'Rellena todos los campos correctamente',
            err 
        }); 
       }  else 

       repre.save((err, representante)=>{
        if(err){
            return res.status(400).json({ 
                ok: false,
                message: 'No se pudo ejecutar el POST correctamente',
                err 
            }); 
           }
           res.json({
            ok: true,
            message: 'nuevo REPRESENTANTE correcto',
            representante
        });
       });
});

module.exports = app;