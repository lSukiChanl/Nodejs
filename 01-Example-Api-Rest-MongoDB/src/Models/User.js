const mongoose = require('mongoose');

// Define el esquema del libro
const userShema = new mongoose.Schema({
  username: String,
  password: String,
});

// Crea el modelo del Usuario
const User = mongoose.model('User', userShema);

module.exports = User;