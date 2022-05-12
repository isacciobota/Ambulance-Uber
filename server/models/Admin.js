const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
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
    }
});

module.exports = mongoose.model('Admins', AdminSchema);