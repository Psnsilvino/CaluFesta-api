import { Router } from 'express';
import { createClient, getClients, getClientById, updateClient, deleteClient } from '../handlers/clients';
import { verifyToken } from '../middlewares/verifyToken';

const clientRouter = Router();

clientRouter.post('/', verifyToken, createClient);
clientRouter.get('/', verifyToken, getClients);
clientRouter.get('/:id', verifyToken, getClientById);
clientRouter.put('/:id', verifyToken, updateClient);
clientRouter.delete('/:id', verifyToken, deleteClient);

export default clientRouter;
