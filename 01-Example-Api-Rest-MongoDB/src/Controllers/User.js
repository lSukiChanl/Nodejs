const mongoose = require('mongoose');
const ModelUser = require('../Models/User');

const getAllUsers = async (req, res) => {
    try {
        const User = await ModelUser.find();
        res.json(User);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los Usuarios' });
    }
};

const getUserById = async (req, res) => {
    try {
        const User = await ModelUser.findById(req.params.id);
        res.json(User);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el Usuario' });
    }
};

const getUserByUsername = async (req, res) => {
    try {
        const User = await ModelUser.find({ username: { $regex: req.params.id, $options: 'i'}});
        res.json(User);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener el Usuario' });
    }
};

const addUser = async (req, res) => {
    const { username, password } = req.body;
    const User = new ModelUser({ username, password });
  
    try {
      const newUser = await User.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: 'Error al crear el Usuario' });
    }
};

module.exports = {getAllUsers, getUserById, getUserByUsername, addUser};