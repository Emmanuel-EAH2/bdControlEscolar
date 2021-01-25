const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = 'mongodb://localhost:27017/ESFC'

mongoose.connect(uri, { useNewUrlParser: true })
  .then(function () { 
    console.log('Success to establish connection with mongodb :)'); 
  }).catch(function (err) { 
    console.log('Failed to establish connection with mongodb :('); 
    console.log(err.message); 
  }); 

module.exports = mongoose.connection;