const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParamedicSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Token: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Paramedic', ParamedicSchema);