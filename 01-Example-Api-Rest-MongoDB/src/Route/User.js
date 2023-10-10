const UserController = require('../Controllers/User');
const express = require('express');

const router = express.Router();

    router.get('/users', UserController.getAllUsers);

    router.get('/user/:id', UserController.getUserById);

    router.get('/user/username/:id', UserController.getUserByUsername);

    router.get('/users/find', UserController.getUsuariosJSON);


    router.put('/user/updateremove/:id', UserController.updateUserByIdRemove);

    router.put('/user/updatekeep/:id', UserController.updateUserByIdKeep);


    router.delete('/user/delete/:id', UserController.deleteUserById);

    router.delete('/users/delete/:id', UserController.deleteUserByUsername);


    router.post('/user/add', UserController.addUser);

module.exports = router;