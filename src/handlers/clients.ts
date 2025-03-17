import { Request, Response } from 'express';
import Client from '../models/client.model'; 
import { createClientSchema, updateClientSchema } from '../zod'

// Função para criar um novo cliente
export const createClient = async (request: Request, response: Response) => {

    const client = createClientSchema.safeParse(request.body)

    if (client.success) {

        try {
            const newClient = new Client(client.data);
            await newClient.save();
            response.status(201).json(newClient);
        } 
        catch (error) {
            response.status(400).json({ message: error });
        }
    } 
    else {
        response.status(500).json({ message: client.error.message });
    }
};

export const getClients = async (request: Request, response: Response) => {

    try {
        const clients = await Client.find({}, {endereco: 0});
        response.status(200).json(clients);
    } 
    catch (error) {
        response.status(500).json({ message: error });
    }
};

export const getClientById = async (request: Request, response: Response) => {

    try {
        const client = await Client.findById(request.params.id);

        if (!client) return response.status(404).json({ message: 'Cliente não encontrado' });

        response.status(200).json(client);
    } 
    catch (error) {
        response.status(500).json({ message: error });
    }
};

export const updateClient = async (request: Request, response: Response) => {

     const clientInfo = updateClientSchema.safeParse(request.body);
     console.log(clientInfo)

     if (clientInfo.success) {

        try {
            const client = await Client.findByIdAndUpdate(request.params.id, clientInfo.data, { new: true });

            if (!client) return response.status(404).json({ message: 'Cliente não encontrado' });

            response.status(200).json(client);
        } 
        catch (error) {
            response.status(400).json({ message: error });
        }
     } 
     else {
        
        response.status(402).json({ message: clientInfo.error.message });
     }
};

export const deleteClient = async (request: Request, response: Response) => {

    try {
        const client = await Client.findByIdAndDelete(request.params.id);

        if (!client) return response.status(404).json({ message: 'Cliente não encontrado' });
        
        response.status(200).json({ message: 'Cliente removido com sucesso' });
    } catch (error) {
        response.status(500).json({ message: error });
    }
};
