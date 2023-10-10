const mongoose = require('mongoose');
const ModelUser = require('../Models/User');

/// Metodos get para busqueda de usuarios
const getAllUsers = async (req, res) => {
    try {
        const User = await ModelUser.find();
        res.json(User);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener todos los Usuarios' });
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

const getUsuariosJSON = async (req, res) => {
  try {
    const filtro = req.body;

    for (const key in filtro) {
      if (filtro.hasOwnProperty(key) && typeof filtro[key] === 'string') {
        filtro[key] = { $regex: new RegExp(filtro[key], 'i') };
      }
    }
    const usuariosEncontrados = await ModelUser.find(filtro);

    res.json(usuariosEncontrados);
  } catch (err) {
    res.status(500).json({ error: 'Error al buscar usuarios' });
  }
};

/// Metodos put para edicion de usuarios
const updateUserByIdRemove = async (req, res) => {
  const { username, password } = req.body;
  const userId = req.params.id;

  try {
    const userToUpdate = await ModelUser.findById(req.params.id);

    if (!userToUpdate) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    userToUpdate.username = username;
    userToUpdate.password = password;

    const updatedUser = await userToUpdate.save();

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar el Usuario' });
  }
};

const updateUserByIdKeep = async (req, res) => {
  const usuarioId = req.params.id; // ID del usuario a actualizar
  const updateData = req.body; // JSON con los campos a actualizar
  
  try {
    const usuarioActual = await ModelUser.findById(usuarioId);
  
    if (!usuarioActual) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
  
    const usuarioActualizado = Object.assign(usuarioActual, updateData);
  
    const resultado = await usuarioActualizado.save();
  
    res.json(resultado);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar el Usuario' });
  }
};

/// Metodos get para eliminacion de usuarios
const deleteUserById = async (req, res) => {
  try {
      const User = await ModelUser.findByIdAndDelete(req.params.id);
      res.json(User);
  } catch (err) {
      res.status(500).json({ error: 'Error al obtener el Usuario' });
  }
};

const deleteUserByUsername = async (req, res) => {
  try {
      const User = await ModelUser.deleteMany({ username: { $regex: req.params.id, $options: 'i'}});
      res.json(User);
  } catch (err) {
      res.status(500).json({ error: 'Error al obtener el Usuario' });
  }
};

/// Metodos post para agregar de usuarios
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

module.exports = {getAllUsers, getUserById, getUserByUsername, getUsuariosJSON,
                  updateUserByIdRemove, updateUserByIdKeep,
                  deleteUserById, deleteUserByUsername,
                  addUser};