const mongoose = require('mongoose');

// Define el esquema del Usuario
const serieShema = new mongoose.Schema({
  url: String,
  nombre: String,
  alias: Array,
  descripcion: String,
  capitulos: String,
  puntuacion: String,
  categoria: String,
  generos: Array,
  fuente: String,
  actualizacion: Date,
  fechainicio: Date,
  fechafin: Date,
  imgfondo: String,
  imgportada: String,
  imggif: String,
  imgopening: String,
  imgcapitulo: String,
  imgending: String,
  imgfolder: String,
  karaoke: String,
  descarga: String,
  resolucion: String,
  extension: String,
  uploader: String,
  censura: String
});



// Crea el modelo del Usuario
const Serie = mongoose.model('serie', serieShema);

module.exports = Serie;