import { Request, Response } from 'express';
import Client from '../models/client.model'; // ajuste o caminho conforme necessário

// Função para criar um novo cliente
export const createClient = async (request: Request, response: Response) => {
    try {
        const newClient = new Client(request.body);
        await newClient.save();
        response.status(201).json(newClient);
    } catch (error) {
        response.status(400).json({ message: error });
    }
};

export const getClients = async (request: Request, response: Response) => {
    try {
        const clients = await Client.find({}, {endereco: 0});
        response.status(200).json(clients);
    } catch (error) {
        response.status(500).json({ message: error });
    }
};

export const getClientById = async (request: Request, response: Response) => {
    try {
        const client = await Client.findById(request.params.id);
        if (!client) {
            return response.status(404).json({ message: 'Cliente não encontrado' });
        }
        response.status(200).json(client);
    } catch (error) {
        response.status(500).json({ message: error });
    }
};

export const updateClient = async (request: Request, response: Response) => {
    try {
        const client = await Client.findByIdAndUpdate(request.params.id, request.body, { new: true });
        if (!client) {
            return response.status(404).json({ message: 'Cliente não encontrado' });
        }
        response.status(200).json(client);
    } catch (error) {
        response.status(400).json({ message: error });
    }
};

export const deleteClient = async (request: Request, response: Response) => {
    try {
        const client = await Client.findByIdAndDelete(request.params.id);
        if (!client) {
            return response.status(404).json({ message: 'Cliente não encontrado' });
        }
        response.status(200).json({ message: 'Cliente removido com sucesso' });
    } catch (error) {
        response.status(500).json({ message: error });
    }
};
