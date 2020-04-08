const express = require('express');

const sessionController = require('./controllers/sessionController');
const usuarioController = require('./controllers/usuarioController');
const perfilAcessoController = require('./controllers/perfilAcessoController');
const perfilAcessoUsuarioController = require('./controllers/perfilAcessoUsuarioController');
const localController = require('./controllers/localController');
const statusTicketController = require('./controllers/statusTicketController');
const tipoTicketController = require('./controllers/tipoTicketController');
const prioridadeController = require('./controllers/prioridadeController');
const ticketController = require('./controllers/ticketController');
const grupoTrabalhoController = require('./controllers/grupoTrabalhoController');
const grupoTrabalhoAnalistaController = require('./controllers/grupoTrabalhoAnalistaController');
const clienteLocalController = require('./controllers/clienteLocalController');
const tipoRemetenteController = require('./controllers/tipoRemetenteController');
const mensagemTicketController = require('./controllers/mensagemTicketController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/usuario', usuarioController.index);
routes.get('/usuario/:id', usuarioController.indexById);
routes.post('/usuario', usuarioController.create);
routes.put('/usuario/:id', usuarioController.update);

routes.get('/perfilAcesso', perfilAcessoController.index);
routes.get('/perfilAcesso/:id', perfilAcessoController.indexById);
routes.post('/perfilAcesso', perfilAcessoController.create);
routes.put('/perfilAcesso/:id', perfilAcessoController.update);

routes.get('/perfilAcessoUsuario', perfilAcessoUsuarioController.index);
routes.get('/perfilAcessoUsuario/:id', perfilAcessoUsuarioController.indexById);
routes.post('/perfilAcessoUsuario', perfilAcessoUsuarioController.create);
routes.put('/perfilAcessoUsuario/:id', perfilAcessoUsuarioController.update);

routes.get('/local', localController.index);
routes.get('/local/:id', localController.indexById);
routes.post('/local', localController.create);
routes.put('/local/:id', localController.update);

routes.get('/statusTicket', statusTicketController.index);
routes.get('/statusTicket/:id', statusTicketController.indexById);
routes.post('/statusTicket', statusTicketController.create);
routes.put('/statusTicket/:id', statusTicketController.update);

routes.get('/tipoTicket', tipoTicketController.index);
routes.get('/tipoTicket/:id', tipoTicketController.indexById);
routes.post('/tipoTicket', tipoTicketController.create);
routes.put('/tipoTicket/:id', tipoTicketController.update);

routes.get('/prioridade', prioridadeController.index);
routes.get('/prioridade/:id', prioridadeController.indexById);
routes.post('/prioridade', prioridadeController.create);
routes.put('/prioridade/:id', prioridadeController.update);

routes.get('/ticket', ticketController.index);
routes.get('/ticket/:id', ticketController.indexById);
routes.post('/ticket', ticketController.create);
routes.put('/ticket/:id', ticketController.update);

routes.get('/grupoTrabalho', grupoTrabalhoController.index);
routes.get('/grupoTrabalho/:id', grupoTrabalhoController.indexById);
routes.post('/grupoTrabalho', grupoTrabalhoController.create);
routes.put('/grupoTrabalho/:id', grupoTrabalhoController.update);

routes.get('/grupoTrabalhoAnalista', grupoTrabalhoAnalistaController.index);
routes.get('/grupoTrabalhoAnalista/:id', grupoTrabalhoAnalistaController.indexById);
routes.post('/grupoTrabalhoAnalista', grupoTrabalhoAnalistaController.create);
routes.put('/grupoTrabalhoAnalista/:id', grupoTrabalhoAnalistaController.update);

routes.get('/clienteLocal', clienteLocalController.index);
routes.get('/clienteLocal/:id', clienteLocalController.indexById);
routes.post('/clienteLocal', clienteLocalController.create);
routes.put('/clienteLocal/:id', clienteLocalController.update);

routes.get('/tipoRemetente', tipoRemetenteController.index);
routes.get('/tipoRemetente/:id', tipoRemetenteController.indexById);
routes.post('/tipoRemetente', tipoRemetenteController.create);
routes.put('/tipoRemetente/:id', tipoRemetenteController.update);

routes.get('/mensagemTicket', mensagemTicketController.index);
routes.get('/mensagemTicket/:id', mensagemTicketController.indexById);
routes.post('/mensagemTicket', mensagemTicketController.create);
routes.put('/mensagemTicket/:id', mensagemTicketController.update);

module.exports = routes;