import { clienteAuthenticateVerify } from './src/login/midleware/clienteAuthenticateVerify';
import clienteController from './src/controllers/clienteController';
import criadorController from './src/controllers/criadorController';
import eventoController from './src/controllers/eventoController';
import ingressoController from './src/controllers/ingressoController';
import authenticateController from './src/controllers/authenticateController';


import {Router} from "express"
import { criadorAuthenticateVerify } from './src/login/midleware/criadorAuthenticateVerify';


const routes = Router();

/*
  Rotas Cliente
*/
routes.post('/cliente',clienteController.createUser)

/*
  Rotas Criador de Evento
*/
routes.post('/criador',criadorController.createUser)

/*
  Rotas de Evento
*/

routes.post('/evento',criadorAuthenticateVerify,eventoController.createEvento)
routes.get('/evento',eventoController.readEvento)
routes.put('/evento/:id',criadorAuthenticateVerify,eventoController.updateEvento)
routes.delete('/evento/:id',criadorAuthenticateVerify,eventoController.deleteEvento)

/*
  Rotas de Ingresso
*/
routes.post('/ingresso',clienteAuthenticateVerify,ingressoController.createCompraIngresso)
routes.get('/ingresso/:usu_cliente_id',clienteAuthenticateVerify,ingressoController.readCompraIngresso)


/*
  Login 
*/
routes.post('/login/cliente',authenticateController.authenticateCliente)
routes.post('/login/criador',authenticateController.authenticateCriador)

export default routes

