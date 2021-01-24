const mongoose = require('mongoose');
let Schema = mongoose.Schema;

    let represSchema = new Schema({
        folio:{
            type: Schema.Types.Number,
            ref: 'Alumno',
            required: true
        },
        grado:{
            type: String,
            required: true
        }
    });

    module.exports = mongoose.model('Representantes', represSchema);