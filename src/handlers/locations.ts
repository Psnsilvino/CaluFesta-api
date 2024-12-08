import { Request, Response } from 'express';
import Location from '../models/location.model';
import { createLocationSchema, updateLocationSchema } from '../zod';

export const getLocations = async (request: Request, response: Response) => {

	try {
		const locations = await Location.find()
		response.status(200).json(locations);
	} 
	catch (error) {
		response.status(500).json({ message: error });
	}
};

export const getUncompletedLocations = async (request: Request, response: Response) => {

	try {
		const locations = await Location.find({ concluida: false });
		response.status(200).json(locations);
	} 
	catch (error) {
		response.status(500).json({ message: error });
	}
};

export const getNextLocation = async (request: Request, response: Response) => {

	try {
		
		const location = await Location.find(
			{ concluida: false }
		  ).sort(
			{ data_inicio: 1 } 
		  ).limit(1);

		response.status(200).json(location);
	} 
	catch (error) {
		response.status(500).json({ message: error });
	}
};

export const createLocation = async (request: Request, response: Response) => {

	const location = createLocationSchema.safeParse(request.body);
	
	if (location.success) {
		try {
			const newLocation = new Location(location.data);
			const savedLocation = await newLocation.save();
			response.status(201).json(savedLocation);
		} 
		catch (error) {
			response.status(400).json({ message: error });
		}
	}
	else {
		response.status(500).json({ message: location.error.message });
	}
};

export const getLocationById = async (request: Request, response: Response) => {

	try {
		const locationItem = await Location.findById(request.params.id);

		if (!locationItem) return response.status(404).json({ message: 'Location not found' });
		
		response.status(200).json(locationItem);
	} 
	catch (error) {
		response.status(500).json({ message: error });
	}
};

export const getClientLocations = async (request: Request, response: Response) => {

	try {
		const locationItem = await Location.find({ cliente: request.params.idCliente });

		if (!locationItem) return response.status(404).json({ message: 'Location not found' });
		
		response.status(200).json(locationItem);
	} 
	catch (error) {
		response.status(500).json({ message: error });
	}
};

export const updateLocation = async (request: Request, response: Response) => {

	const location = updateLocationSchema.safeParse(request.body)

	if (location.success) {

		try {
			const updatedLocation = await Location.findByIdAndUpdate(request.params.id, location.data, { new: true });
	
			if (!updatedLocation) return response.status(404).json({ message: 'Location not found' });
			
			response.status(200).json(updatedLocation);
		} 
		catch (error) {
			response.status(400).json({ message: error });
		}
	}
	else {
		response.status(500).json({ message: location.error.message });
	}
};


export const deleteLocation = async (request: Request, response: Response) => {

	try {
		const deletedLocation = await Location.findByIdAndDelete(request.params.id);

		if (!deletedLocation) return response.status(404).json({ message: 'Location not found' });

		response.status(200).json({ message: 'Location deleted successfully' });
	} 
	catch (error) {
		response.status(500).json({ message: error });
	}
};

