const Hospital = require('../models/Hospital');

const getHospitals = async (req, res) => {
    const hospitals = await Hospital.find()

    res.status(200).json(hospitals);
};

const getHospital = async(req, res) => {
    try{
        const hospital = await Hospital.findById(req.params.id);
        if (!hospital)
            throw new Error;
        res.status(200).json(hospital);
    } catch (error) {
        res.status(404).json({message: error});
    }
};

const postHospital = async (req, res) => {
    const {name, address, doctors} = req.body;

    const hospital = new Hospital({
        name,
        address,
        doctors
    });

    try {
        const savedHospital = await hospital.save();
        res.status(200).json(savedHospital);
    } catch(error) {
        res.status(409).json(error.message);
    }
};

const putHospital = async (req, res) => {
    try {
        const updatedHospital = await Hospital.updateOne({ _id: req.params.id }, { $set: { name: req.body.name }});
        res.status(200).json(updatedHospital);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const deleteHospital = async (req, res) => {
    try {
        const removedHospital = await Hospital.deleteOne({ _id: req.params.id });
        res.status(200).json(removedHospital);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

module.exports = {
    getHospitals,
    getHospital,
    postHospital,
    putHospital,
    deleteHospital
};