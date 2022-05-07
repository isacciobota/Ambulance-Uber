const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParamedicSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: 4
    },
    username: {
        type: String,
        required: true,
        min: 6,
        max: 24
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    email: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Paramedic', ParamedicSchema);