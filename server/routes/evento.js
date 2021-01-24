const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const { errorMonitor } = require('stream');
const Evento = require('../models/evento');
const Imagen = require('../models/evento');

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../../sources/image'),
 filename: (req, file, callB)=>{
   callB(null, file.originalname);
 }

});


/*******FUNCIONES GET*******/
app.get('/evento', (req, res)=>{
    Evento.find({}).populate('secundaria', 'coordinador').exec((err, evento)=>{
        if(err){
            res.status(400).json({
                ok: false,
                message: 'Ocurrio un error al consultar los EVENTOS',
                err
            });
        }
        res.json({
            ok:true,
            message: 'buena consulta a los Eventos',
            conteo:  evento.length,
            eventos: evento 
        });
    });
});

// app.get('/imagenes', (req,res)=>{
//   Imagen.find({}).exec((err,img)=>{
//     if(err){
//       res.status(400).json({
//           ok: false,
//           message: 'Ocurrio un error al consultar los EVENTOS',
//           err
//       });
//     }
//     res.json({
//       ok:true,
//       message: 'Imagenes consultadas con EXITO',
//       conteo: img.length,
//       imagenes: img
//     })
//   });
// });

app.get('/evento/:id', (req, res)=>{
    let id = req.params.id
  Evento.findById(Number(id))
  .populate("secundaria", "coordinador")
  .then(data =>{
            if (!data)
            res.status(404).send({ message: `No se encontro elemento con id: ${id}`});
            else res.send(data);
        }).catch((error)=>console.log(error));
});
/**********FIN DE FUNCIONES GET*********/

app.post('/evento',(req,res)=>{
    let body = req.body;
    let evento = new Evento({
        _id: body._id,
     secundaria: body.secundaria,
     nombre: body.nombre,
     dia: body.dia,
     objetivos: body.objetivos,
     materiales: body.materiales,
     coordinadoresAux: body.coordinadoresAux,
     estimacionAlumnos: body.estimacionAlumnos,
     actividades: body.actividades,
     horaInicio: body.horaInicio,
     horaTermina: body.horaTermina
    });

    if (!req.body){
      return res.status(400).json({
          ok: false,
          message: 'Rellena todos los campos correctamente',
      }); 
  }
 evento.save((err, eventNew)=>{
    if(err ){
        return res.status(400).json({
            ok: false,
            message: 'No se pudo ejecutar el POST correctamente',
            err 
        }); 
      }
        res.json({
        ok: true,
        message: 'EVENTO nuevo FELICIDADES',
        eventNew        
      });
    });

    // _id.save((error, new_id)=>{
    //     if(error){
    //         return res.status(400).json({
    //             ok: false,
    //             message: 'No se pudo ejecutar el POST correctamente',
    //             error 
    //         }); 
    //       }
    //       res.json({
    //         ok: true,
    //         eventNew        
    //       });
    // })
    // console.log(_id);
});

const upload = multer({ dest: path.join(__dirname, '../../sources/image'),storage: storage}).single('img');

// app.post('/imagen/evento',upload,(req, res)=>{
//   let file = req.file
//    let imagen = new Imagen({
//      img: req.body.img,
//      imgfilename: file.filename, 
//      imgpath: path.join(__dirname, '../../../sources/image'),
//      imgoriginalname: file.originalname
//    });

//    imagen.save((error, img)=>{
//     if(error){
//       return res.status(400).json({
//           ok: false,
//           message: 'No se pudo ejecutar el POST correctamente',
//           error
//       }); 
//     }
//     console.log(req.file); 
//     res.json({
//       ok: true,
//       message: 'imagen subida con exito',
//       img
//     });
//   });
// });

module.exports = app;