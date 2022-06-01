const Patient = require('../models/Patient');
const addPatientService = require('../services/addPatientService');

const getPatients = async (req, res) => {
    const patients = await Patient.find()

    res.status(200).json(patients);
};

const getPatient = async(req, res) => {
    try{
        const patient = await Patient.findById(req.params.id);
        if (!patient)
            throw new Error;
        res.status(200).json(patient);
    } catch (error) {
        res.status(404).json({message: error});
    }
};

const postPatient = async (req, res) => {
    const patient = await addPatientService.addPatientService(req.body);

    if (patient instanceof Error)
        return res.status(409).send(patient.message);

    try {
        const savedPatient= await patient.save();
        res.status(200).json(savedPatient);
    } catch(error) {
        res.status(409).json(error.message);
    }
};

const putPatient = async (req, res) => {
    try {
        const updatedPatient = await Patient.updateOne({ _id: req.params.id }, { $set: { name: req.body.name }});
        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const deletePatient = async (req, res) => {
    try {
        const removedPatient = await Patient.deleteOne({ _id: req.params.id });
        res.status(200).json(removedPatient);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

module.exports = {
    getPatients,
    getPatient,
    postPatient,
    putPatient,
    deletePatient
};