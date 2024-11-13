import { Router } from 'express';
import { createLocation, deleteLocation, getLocationById, getLocations, updateLocation } from '../handlers/locations';

const locationRouter = Router();

locationRouter.post('/', createLocation);
locationRouter.get('/', getLocations);
locationRouter.get('/:id', getLocationById);
locationRouter.put('/:id', updateLocation);
locationRouter.delete('/:id', deleteLocation);

export default locationRouter;