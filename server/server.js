const express =  require('express');
const bodyParser = require('body-parser');
const app = express(); 
const mongoose = require('mongoose'); 
const cors = require('cors');
const port = process.env.PORT || 3003;
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json()); 
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use('../sources/image', express.static(path.resolve('../sources/image')));
app.use(cookieParser());
// app.set('trust proxy', 1);

/****ROUTES****/
app.use(require('./routes/repres'));
app.use(require('./routes/alumnos')); 
app.use(require('./routes/reportesSabatinos'));
app.use(require('./routes/secus'));
app.use(require('./routes/evento'));
app.use(require('./routes/materia'));
app.use(require('./routes/profesor'));
app.set('../sources/image', path.join(__dirname, '../sources/image'));



app.get('/', (req, res)=>{
    res.send('BIENVENIDO AL CONTROL ESCOLAR')
});


mongoose.connect('mongodb://localhost:27017/ESFC', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, (err, res)=>{
    if(err) throw err;
    console.log('BASE DE DATOS ONLINE');
});



app.listen(port, ()=> console.log('El servidor esta escuchando en el puerto:', port));