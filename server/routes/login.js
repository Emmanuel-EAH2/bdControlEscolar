const express =  require('express');
const app = express(); 
const bcrypt = require('bcrypt');
const Login = require('../models/login');

app.post('/login', (req, res)=>{
    let body = req.body; 
    Login.findOne({}, (err, log)=>{
        try {
            if(err){
                return res.status(400).json({
                    ok: false,
                    msg: 'Ocurrio un error al momento de logearse',
                    err
              });         
            }
            if (!log) {
                return res.status(400).json({
                    ok: false,
                    msg: 'incorrecto, intentalo otra vez',
                    err
             });
            }
            if (!bcrypt.compareSync(body.contraseña, log.contraseña)) {
                return res.status(401).json({
                    ok: false, 
                    msg: 'Contraseña incorrecta, intentalo otra vez'
              });
            }
            res.json({
                ok: true,
                msg: `Bienvenido a la pagina ${log.nombre}`,
                log
          });
        } catch (error) {
        console.log(error);
        return error;
     }; 
   });
});

module.exports = app;