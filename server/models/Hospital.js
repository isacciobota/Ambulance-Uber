const mongoose = require('mongoose');

const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    doctorsToken: [String]
});

module.exports = mongoose.model('Hospitals', HospitalSchema);
