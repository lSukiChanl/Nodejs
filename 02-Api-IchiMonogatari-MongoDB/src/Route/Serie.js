const SerieController = require('../Controllers/Serie');
const express = require('express');

const router = express.Router();

    router.get('/series', SerieController.getAllSeries)

    router.post('/serie/add', SerieController.addSerie);

module.exports = router;