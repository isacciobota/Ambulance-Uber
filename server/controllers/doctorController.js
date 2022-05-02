const Doctor = require('../models/Doctor');
const addDoctorService = require('../services/doctorService');

const getDoctors = async (req, res) => {
    const doctors = await Doctor.find()

    res.status(200).json(doctors);
};

const getDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor)
            throw new Error;
        res.status(200).json(doctor);
    } catch (error) {
        res.status(404).json({message: error});
    }
};

const postDoctor = async (req, res) => {
    const doctor = await addDoctorService(req.body);

    if (doctor instanceof Error)
        return res.status(409).send(error.message);

    try {
        const savedDoctor = await doctor.save();
        res.status(200).json(savedDoctor);
    } catch (error) {
        res.status(409).json({ message: error });
    }
};

const putDoctor = async (req, res) => {
    try {
        const updatedDoctor = await Doctor.updateOne({ _id: req.params.id }, { $set: { name: req.body.name }});
        res.status(200).json(updatedDoctor);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const deleteDoctor = async (req, res) => {
    try {
        const removedDoctor = await Doctor.deleteOne({ _id: req.params.id });
        res.status(200).json(removedDoctor);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

module.exports = {
    getDoctors,
    getDoctor,
    postDoctor,
    putDoctor,
    deleteDoctor
};