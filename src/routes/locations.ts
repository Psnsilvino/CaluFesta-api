import { Router } from 'express';
import { createLocation, deleteLocation, getLocationById, getLocations, updateLocation } from '../handlers/locations';

const locationRouter = Router();

locationRouter.post('/locations', createLocation);
locationRouter.get('/locations', getLocations);
locationRouter.get('/locations/:id', getLocationById);
locationRouter.put('/locations/:id', updateLocation);
locationRouter.delete('/locations/:id', deleteLocation);

export default locationRouter;