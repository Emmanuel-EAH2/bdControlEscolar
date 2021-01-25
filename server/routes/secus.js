const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const Secundaria = require('../models/secus');
const session = require('express-session');
const store = new session.MemoryStore();
const MongoStore = require('connect-mongo')(session);
const conn = require('../connection');

 app.use(session({
    secret: process.env.SESSION_SECRET || 'clave',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true, maxAge: 60000},
    store: new MongoStore({
        mongooseConnection: conn
    })
 }));

// function validateCookie(req, res, next) {
//     const { cookies } = req;
//       if ('session_id' in cookies) {
//     console.log('Existe la sesion');
//       } else res.status(403).send({msg: 'No esta identificado'});
// }

app.get('/secundaria/:id', (req, res)=>{
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
    

    app.post('/secundariaLogin', (req, res)=>{
        let body = req.body;
            clave = bcrypt.hashSync(body.clave, 2);
        Secundaria.findOne((err, secuDB)=>{
            if(err){
                return res.status(400).json({
                    ok: false,
                    msg: 'Ocurrio un error al momento de logearse',
                    err
                });
              }
              if(!secuDB){
                return res.status(400).json({
                 ok: false,
                 msg: 'intentalo otra vez algo esta mal',
                 err
               });
              }
            //   if(!bcrypt.compareSync(clave ,secuDB.clave)){
            //     return res.status(401).json({
            //         ok: false, 
            //         msg: 'Contraseña incorrecta, intentalo otra vez'
            //     });
            //   }
              res.json({
                  ok:true,
                  message: `Bienvenido a la pagina ${secuDB.coordinador}`,
                  secuDB
              });
            //   res.redirect('/home', 301);
        });
        // if(!req.body){
                // if(req.session.authenticated){
                    //  res.json(req.session);
                    // }else{
                            // if(!req.body.clave){
                                // res.status(403).json({msg: 'No es la clave corrrecta'})
                            // }else{
                                    // req.session.authenticated = true;
                                    // res.json({ok:true})
                                    // }
                                //   }
                                // } else res.status(403).json({msg: 'No existe la secundaria'});
         req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1;
         console.log(req.session.cuenta);
         console.log(req.sessionID);
});

module.exports = app;