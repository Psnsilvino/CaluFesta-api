import { Router } from 'express';
import { createLocation, deleteLocation, getClientLocations, getLocationById, getLocations, getNextLocation, getUncompletedLocations, updateLocation } from '../handlers/locations';
import { verifyToken } from '../middlewares/verifyToken';

const locationRouter = Router();

locationRouter.post('/', verifyToken, createLocation);
locationRouter.get('/', verifyToken, getLocations);
locationRouter.get('/uncompleted', verifyToken, getUncompletedLocations);
locationRouter.get('/next', verifyToken, getNextLocation);
locationRouter.get('/:id', verifyToken, getLocationById);
locationRouter.get('/cliente/:idCliente', verifyToken, getClientLocations);
locationRouter.put('/:id', verifyToken, updateLocation);
locationRouter.delete('/:id', verifyToken, deleteLocation);

export default locationRouter;