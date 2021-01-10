const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const Secundaria = require('../models/secus');

app.get('/secundaria/:id', (req, res)=>{
    let id = req.params.id
    Secundaria.findById(id).then(data=>{
        if (!data) res.status(404).send({ message: `No se encontro elemento con clave: ${id}`})
        else res.json({ok:true,message:'es correcto el ID', data});
    }).catch((error)=>console.log(error));
});

app.post('/secundaria', (req,res)=>{
    let body = req.body;
    let secu= new Secundaria({
        _id: body._id,
        coordinador: body.coordinador,
        clave: bcrypt.hashSync(body.clave, 5)
    });

    secu.save((error, secuNew)=>{
        if(error){
            return res.status(400).json({
                ok: false,
                message: 'No se pudo ejecutar el POST correctamente',
                error
            }); 
           }
           res.json({
               ok: true,
               message:'SECUNDARIA creada con exito',
               secuNew
           });
    });
});

module.exports = app;