const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const Evento = require('../models/evento');

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'sources'),
    filename: (req, file, callB)=>{
      callB(null, file.originalname);
    } 
  });

/*******FUNCIONES GET*******/
app.get('/evento', (req, res)=>{
    Evento.find({}).populate('secundaria', 'coordinador').exec((err, evento, imagen)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar los EVENTOS',
                err
            });
        }
        res.json({
            ok:true,
            message: 'buena consulta a los Alumnos de Santa Ines',
            conteo:  evento.length,
            eventos: evento,        
        });
    });
});

app.get('/evento/:id', (req, res)=>{
        let id = req.params.id;
        Evento.findById(id).then(data =>{
            if (!data)
            res.status(404).send({ message: `No se encontro elemento con id: ${id}`});
            else res.send(data);
        }).catch((error)=>console.log(error));
});
/**********FIN DE FUNCIONES GET*********/

const upload = multer({
    storage,
    dest: path.join(__dirname, 'sources'),
    fileFilter: (req, file, callb)=>{
      const fileTypes = /jpeg|jpg|png|gif/;
      const mimename = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
      if(mimename && extname){
        return callb(null, true);
      }
      callb("Error: el Archivo debe ser una imagen valida")
    }
  }).single('img')

app.post('/evento',upload,(req,res)=>{
    let body = req.body;
    let evento = new Evento({
     secundaria: body.secundaria,
     nombre: body.nombre,
     dia: body.dia,
     objetivos: body.objetivos,
     materiales: body.materiales,
     coordinadoresAux: body.coordinadoresAux,
     estimacionAlumnos: body.estimacionAlumnos,
     img: req.body.img,
     actividades: body.actividades,
     horaInicio: body.horaInicio,
     horaTermina: body.horaTermina
    });


if(req.body.secundaria != 'Santa Ines'){
    return res.status(400).json({
        ok: false,
        message: `Escribe bien el nombre de la secundaria: "Santa Ines"`,
    });
}
else
 evento.save((err, eventNew)=>{
    if(err ){
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
        }); 
    }
        res.json({
        ok: true,
        message: 'EVENTO nuevo FELICIDADES',
        eventNew        
      });
    });

});

module.exports = app;