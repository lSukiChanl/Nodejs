const UserController = require('../Controllers/User');
const express = require('express');

const router = express.Router();

    router.get('/users', UserController.getAllUsers);

    router.get('/user/id/:id', UserController.getUserById);

    router.get('/user/username/:id', UserController.getUserByUsername);

    router.post('/user/add', UserController.addUser);

module.exports = router;