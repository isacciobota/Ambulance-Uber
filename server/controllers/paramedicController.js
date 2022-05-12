const Paramedic = require('../models/Paramedic');
const addParamedicService = require('../services/addParamedicService');

const getParamedics= async (req, res) => {
    const paramedics = await Paramedic.find()

    res.status(200).json(paramedics);
};

const getParamedic = async(req, res) => {
    try{
        const paramedic = await Paramedic.findById(req.params.id);
        if (!paramedic)
            throw new Error;
        res.status(200).json(paramedic);
    } catch (error) {
        res.status(404).json({message: error});
    }
};

const postParamedic = async (req, res) => {
    const paramedic = await addParamedicService.addParamedicService(req.body);

    if (paramedic instanceof Error)
        return res.status(409).send(paramedic.message);

    try {
        const savedParamedic = await paramedic.save();
        res.status(200).json(savedParamedic);
    } catch(error) {
        res.status(409).json(error.message);
    }
};

const putParamedic = async (req, res) => {
    try {
        const updatedParamedic= await Paramedic.updateOne({ _id: req.params.id }, { $set: { name: req.body.name }});
        res.status(200).json(updatedParamedic);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const deleteParamedic = async (req, res) => {
    try {
        const removedParamedic = await Paramedic.deleteOne({ _id: req.params.id });
        res.status(200).json(removedParamedic);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

module.exports = {
    getParamedics,
    getParamedic,
    postParamedic,
    putParamedic,
    deleteParamedic
};