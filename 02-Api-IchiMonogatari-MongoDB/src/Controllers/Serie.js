const mongoose = require('mongoose');
const ModelSerie = require('../Models/Serie');

/// Metodos get para busqueda de usuarios
const getAllSeries = async (req, res) => {
    try {
        const Serie = await ModelSerie.find();
        res.json(Serie);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener todas las Series' });
    }
};

/// Metodos post para agregar de usuarios
const addSerie = async (req, res) => {
    const { url, nombre, alias, descripcion, capitulos, puntuacion, categoria, generos, fuente, 
          actualizacion, fechainicio, fechafin, imgfondo, imgportada, imggif, imgopening, 
          imgcapitulo, imgending, imgfolder, karaoke, descarga, resolucion, extension, uploader, 
          censura } = req.body;

    const Serie = new ModelSerie({ url, nombre, alias, descripcion, capitulos, puntuacion, 
          categoria, generos, fuente, actualizacion, fechainicio, fechafin, imgfondo, 
          imgportada, imggif, imgopening, imgcapitulo, imgending, imgfolder, karaoke, 
          descarga, resolucion, extension, uploader, censura });
  
    try {
      const newSerie = await Serie.save();
      res.status(201).json(newSerie);
    } catch (err) {
      res.status(500).json({ error: 'Error al crear la Serie' });
    }
};

module.exports = {getAllSeries, addSerie};