const SerieController = require('../Controllers/Serie');
const express = require('express');

const router = express.Router();

    router.get('/series', SerieController.getAllSeries)

    router.get('/serie/:id', SerieController.getSerieById);

    router.get('/serie/name/:id', SerieController.getSerieByName);

    router.get('/serie/delete/:id', SerieController.deleteSerieById);

    router.get('/serie/deletebyname/:id', SerieController.deleteSerieByName);

    router.post('/serie/add', SerieController.addSerie);

module.exports = router;