const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const Secundaria = require('../models/secus');
const session = require('express-session');
const store = new session.MemoryStore();

 app.use(session({
    secret: 'clave',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 6000000 },
     store
 }));

function validateCookie(req, res, next) {
    const { cookies } = req;
    if ('session_id' in cookies) {
        console.log('Existe la sesion');
    if(cookies.session_id === 'session_id') next();
    else res.status(403).send({msg: 'No esta identificado'});
    } else res.status(403).send({msg: 'No esta identificado'});
}

app.get('/secundaria/:id', validateCookie, (req, res)=>{
    let id = req.params.id
        Secundaria.findById(id).then(data=>{
        if (!data) res.status(404).send({ message: `No se encontro ninguna secundaria: ${id}`})
        else res.json({ok:true,message:'es correcto el ID', data});
    }).catch((error)=>console.log(error));

    let body = req.body;
    console.log(req.sessionID);
    let secu= new Secundaria({
        _id: body._id, 
        coordinador: body.coordinador,
        clave: body.clave
    });

if(!req.body){
    if(req.session.authenticated){
     res.json(req.session);
    }else{
        if(!req.body.clave){
        res.status(403).json({msg: 'No es la clave corrrecta'})
    }else{
        req.session.authenticated = true;
        res.json({ok:true})
        }
      }
    } else res.status(403).json({msg: 'No existe la secundaria'});
});

app.post('/secundariaRegister', (req,res)=>{
    let body = req.body;
    console.log(req.sessionID);
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


app.post('/secundariaLogin', validateCookie, (req, res)=>{
    let body = req.body;
    console.log(req.sessionID);
    let secu= new Secundaria({
        _id: body._id, 
        coordinador: body.coordinador,
        clave: body.clave
    });

if(!req.body){
    if(req.session.authenticated){
     res.json(req.session);
    }else{
        if(!req.body.clave){
        res.status(403).json({msg: 'No es la clave corrrecta'})
    }else{
        req.session.authenticated = true;
        res.json({ok:true})
        }
      }
    } else res.status(403).json({msg: 'No existe la secundaria'});
});

module.exports = app;