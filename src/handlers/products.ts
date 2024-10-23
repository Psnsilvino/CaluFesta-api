import { Request, Response } from 'express';
import Produto from '../models/product.model';
import { createProductSchema, updateProductSchema } from '../zod';

export const createProduct = async (request: Request, response: Response): Promise<void> => {

	const produto = createProductSchema.safeParse(request.body)

	if (produto.success) {

		try {
			const novoProduto = new Produto(produto.data);
			const produtoSalvo = await novoProduto.save();
			response.status(201).json(produtoSalvo);
		} 
		catch (error) {
			response.status(500).json(`Erro ao criar produto: ${error}`);
		}
	} 
	else {
		response.status(500).json(produto.error.message);
	}
};

export const getProducts = async (request: Request, response: Response): Promise<void> => {
	try {
		const products = await Produto.find();
		response.status(200).json(products);
	} 
	catch (error) {
		response.status(500).json({ message: 'Erro ao obter produtos', error });
	}
};

export const getProductsByCategory = async (request: Request, response: Response): Promise<void> => {
	const { categoria } = request.params;
	try {
		const products = await Produto.find({ categoria: categoria });
		response.status(200).json(products);
	} 
	catch (error) {
		response.status(500).json({ message: 'Erro ao obter produtos', error });
	}
};

export const getProduct = async (request: Request, response: Response): Promise<void> => {
	try {
		const { id } = request.params;
		const product = await Produto.findById(id);
		if (!product) {
			response.status(404).json({ message: 'Produto não encontrado' });
		}
		response.status(200).json(product);
	} catch (error) {
		response.status(500).json({ message: 'Erro ao obter produto', error });
	}
};

export const updateProduct = async (request: Request, response: Response): Promise<void> => {

	const produto = updateProductSchema.safeParse(request.body)

	if (produto.success) {
		try {

			const { id } = request.params;
			const updatedProduct = await Produto.findByIdAndUpdate(id, produto.data, { new: true });

			if (!updatedProduct) {
				response.status(404).json({ message: 'Produto não encontrado' });
			}

			response.status(200).json(updatedProduct);
		} 
		catch (error) {
			response.status(500).json({ message: 'Erro ao atualizar produto', error });
		}
	} 
	else {
		response.status(500).json(produto.error.message);
	}
};

export const deleteProduct = async (request: Request, response: Response): Promise<void> => {
	try {
		const { id } = request.params;
		const deletedProduct = await Produto.findByIdAndDelete(id);
		
		if (!deletedProduct) {
			response.status(404).json({ message: 'Produto não encontrado' });
		}
		
		response.status(200).json({ message: 'Produto deletado com sucesso' });
	} 
	catch (error) {
		response.status(500).json({ message: 'Erro ao deletar produto', error });
	}
};
