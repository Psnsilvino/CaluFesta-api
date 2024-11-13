import { Router } from 'express';
import { createClient, getClients, getClientById, updateClient, deleteClient } from '../handlers/clients';

const clientRouter = Router();

clientRouter.post('/', createClient);
clientRouter.get('/', getClients);
clientRouter.get('/:id', getClientById);
clientRouter.put('/:id', updateClient);
clientRouter.delete('/:id', deleteClient);

export default clientRouter;
