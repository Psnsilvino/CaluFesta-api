import { Router } from 'express';
import { createClient, getClients, getClientById, updateClient, deleteClient } from '../handlers/clients';

const clientRouter = Router();

clientRouter.post('/clients', createClient);
clientRouter.get('/clients', getClients);
clientRouter.get('/clients/:id', getClientById);
clientRouter.put('/clients/:id', updateClient);
clientRouter.delete('/clients/:id', deleteClient);

export default clientRouter;
