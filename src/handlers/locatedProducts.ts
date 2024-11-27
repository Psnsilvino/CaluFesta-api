import { Request, Response } from 'express';
import Alugado from '../models/locatedProduct.model';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { produto, locacao, quantidade } = req.body;
    const newProduct = await Alugado.create({ produto, locacao, quantidade });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o produto', details: error });
  }
};

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const products = await Alugado.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter produtos', details: error });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Alugado.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o produto', details: error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Alugado.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o produto', details: error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Alugado.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.status(200).json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar o produto', details: error });
  }
};
