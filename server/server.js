const express =  require('express');
const bodyParser = require('body-parser');
const app = express(); 
const mongoose = require('mongoose'); 
const cors = require('cors');
const port = process.env.PORT || 3003;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json()); 
app.use(cors());

/****ROUTES****/
app.use(require('./routes/coordinador'));
app.use(require('./routes/login'));
app.use(require('./routes/alumnos'));



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