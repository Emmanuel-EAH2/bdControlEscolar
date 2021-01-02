const express = require('express');
const app = express();
const _ = require('underscore');
const bcrypt = require('bcrypt');
const Coordinador = require('../models/coordinacion');

app.get('/coordinadores', (req, res)=>{
    Coordinador.find({}).exec((err, coordinacion)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar los coordinadores',
                err
            });
        }
        res.json({
          ok:true,
          message: 'buena consulta a los coordinadores',
          conteo: coordinacion.length,
          coordis: coordinacion        
       });
    }); 
});

/*******FIN DEL GET********/

app.post('/coordinadores', (req, res)=>{
    let body = req.body;
    let coordi = new Coordinador({
        nombre: body.nombre,
        password: bcrypt.hashSync(body.password, 7),
        password2: bcrypt.hashSync(body.password2, 3),
        secundaria: body.secundaria
    });

    coordi.save((err, coordiNew)=>{
        if(err || !req.body){
         return res.status(400).json({
             ok: false,
             message: 'No se pudo ejecutar el POST correctamente',
             err 
         }); 
        }
        if( req.body.password2 === req.body.password){
            res.json({
               ok: true,
               message: 'Coordinador nuevo FELICIDADES',
               coordiNew
            });
        }else{
            res.json({
                message: 'por favor verfica que esten correctamente escritas las contraseñas'
          });
        }
    });

    // coordi.validateSync(password === password2);
});

/********FIN DEL POST********/
app.put('/coordinadores/:id', (req, res)=>{
    let id = req.params.id
    let body = _.pick(req.body, ['nombre', 'password']);

Coordinador.findByIdAndUpdate(id, body, {new: true, runValidators: true, context: 'query'}, (err, coordiMod)=>{
    if(err) {
        return res.status(400).json({
            ok: false,
            msg: 'Ocurrio un error al modificar el coordinador',
            err
        });
};
            res.json({
                ok: true,
                message: 'Buen trabajo lo haz modificado correctamente',
                coordiMod
            });
        });
});

/***************FIN DEL PUT*****************/
app.delete('/coordinadores/:id',(req, res)=>{   
         let id = req.params.id
Coordinador.findByIdAndUpdate(id, { estado: false }, { new: true, runValidators: true, context: 'query' }, (err, CoordiRem)=>{
        if(err){
            res.status(400).json({
                ok: false,
                msg: 'ocurrio un error al momento de borrar el coordinador',
                err
                })
            }
        res.json({
            ok:true,
            message: 'Muy bien coordinador borrado con exito',
            coordinador: CoordiRem
});
});
});
/***************FIN DEL DELETE **************/
module.exports = app;