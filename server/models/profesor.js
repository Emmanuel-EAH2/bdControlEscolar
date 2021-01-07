const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let profesSchema= new Schema({
    secundaria:{
        
    }

});

module.exports = mongoose.model('Profesores', profesSchema)