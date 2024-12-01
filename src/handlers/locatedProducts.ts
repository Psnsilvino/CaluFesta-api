import { Request, Response } from 'express';
import Alugado from '../models/locatedProduct.model';
import { createLocatedProductSchema } from '../zod';

export const createProduct = async (request: Request, response: Response) => {

	const locatedProduct = createLocatedProductSchema.safeParse(request.body);

	try {
		const newProduct = await Alugado.create(locatedProduct.data);
		response.status(201).json(newProduct);
	} 
	catch (error) {
		response.status(500).json({ error: 'Erro ao criar o produto', details: error });
	}
};

export const getProducts = async (request: Request, response: Response) => {
	try {
		const products = await Alugado.find();
		response.status(200).json(products);
	} catch (error) {
		response.status(500).json({ error: 'Erro ao obter produtos', details: error });
	}
};

export const getProductById = async (request: Request, response: Response) => {
	try {
		const { id } = request.params;
		const product = await Alugado.findById(id);
		if (!product) {
			return response.status(404).json({ error: 'Produto não encontrado' });
		}
		response.status(200).json(product);
	} catch (error) {
		response.status(500).json({ error: 'Erro ao obter o produto', details: error });
	}
};

export const updateProduct = async (request: Request, response: Response) => {
	try {
		const { id } = request.params;
		const updatedProduct = await Alugado.findByIdAndUpdate(id, request.body, { new: true, runValidators: true });
		if (!updatedProduct) {
			return response.status(404).json({ error: 'Produto não encontrado' });
		}
		response.status(200).json(updatedProduct);
	} catch (error) {
		response.status(500).json({ error: 'Erro ao atualizar o produto', details: error });
	}
};

export const deleteProduct = async (request: Request, response: Response) => {
	try {
		const { id } = request.params;
		const deletedProduct = await Alugado.findByIdAndDelete(id);
		if (!deletedProduct) {
			return response.status(404).json({ error: 'Produto não encontrado' });
		}
		response.status(200).json({ message: 'Produto deletado com sucesso' });
	} catch (error) {
		response.status(500).json({ error: 'Erro ao deletar o produto', details: error });
	}
};
