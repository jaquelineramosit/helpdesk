const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:id', UsuarioController.indexById);
routes.post('/usuario', UsuarioController.create);
routes.put('/usuario/:id', UsuarioController.update);

module.exports = routes;