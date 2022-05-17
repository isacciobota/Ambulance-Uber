const Admin = require('../models/Doctor');
const addAdminService = require('../services/addAdminService');

const getAdmins = async (req, res) => {
    const admins = await Admin.find()

    res.status(200).json(admins);
};

const getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin)
            throw new Error;
        res.status(200).json(admin);
    } catch (error) {
        res.status(404).json({message: error});
    }
};

const postAdmin = async (req, res) => {
    const admin = await addAdminService.addAdminService(req.body);

    if (admin instanceof Error)
        return res.status(409).send(admin.message);

    try {
        const savedAdmin = await admin.save();
        res.status(200).json(savedAdmin);
    } catch (error) {
        res.status(409).json({ message: error });
    }
};

const putAdmin = async (req, res) => {
    try {
        const updatedAdmin = await Admin.updateOne({ _id: req.params.id }, { $set: { name: req.body.name }});
        res.status(200).json(updatedAdmin);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

const deleteAdmin = async (req, res) => {
    try {
        const removedAdmin = await Admin.deleteOne({ _id: req.params.id });
        res.status(200).json(removedAdmin);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

module.exports = {
    getAdmins,
    getAdmin,
    postAdmin,
    putAdmin,
    deleteAdmin
};