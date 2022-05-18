
import clienteController from './src/controllers/clienteController';
import criadorController from './src/controllers/criadorController';
import eventoController from './src/controllers/eventoController';
import ingressoController from './src/controllers/ingressoController';

import {Router} from "express"

const routes = Router();

/*
  Rotas Criador de Evento
*/
routes.post('/cliente',clienteController.createUser)

/*
  Rotas Criador de Evento
*/
routes.post('/criador',criadorController.createUser)

/*
  Rotas de Evento
*/

routes.post('/evento',eventoController.createEvento)
routes.get('/evento',eventoController.readEvento)
routes.put('/evento/:id',eventoController.updateEvento)
routes.delete('/evento/:id',eventoController.deleteEvento)

/*
  Rotas de Ingresso
*/
routes.post('/ingresso',ingressoController.createCompraIngresso)

export default routes

