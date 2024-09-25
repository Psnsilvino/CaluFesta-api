// src/controllers/produtoController.ts
import { Request, Response } from 'express';
import Produto from '../models/product.model';

// Criar um novo produto
export const createProduct = async (request: Request, response: Response): Promise<void> => {
  try {
    const { nome, categoria, quantidade, quantidadeEmLocacao, preco } = request.body;
    const novoProduto = new Produto({
      nome,
      categoria,
      quantidade,
      quantidadeEmLocacao,
      preco
    });
    const produtoSalvo = await novoProduto.save();
    response.status(201).json(produtoSalvo);
  } catch (error) {
    response.status(500).json({ message: 'Erro ao criar produto', error });
  }
};

export const getProducts = async (request: Request, response: Response): Promise<void> => {
  try {
    const products = await Produto.find();
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ message: 'Erro ao obter produtos', error });
  }
};

export const getProduct = async (request: Request, response: Response): Promise<void> => {
  try {
    const { id } = request.params;
    const product = await Produto.findById(id);
    if (!product) {
      response.status(404).json({ message: 'Produto não encontrado' });
      return;
    }
    response.status(200).json(product);
  } catch (error) {
    response.status(500).json({ message: 'Erro ao obter produto', error });
  }
};

export const updateProduct = async (request: Request, response: Response): Promise<void> => {
  try {
    const { id } = request.params;
    const { nome, categoria, quantidade, quantidadeEmLocacao, preco } = request.body;
    const updatedProduct = await Produto.findByIdAndUpdate(id, {
      nome,
      categoria,
      quantidade,
      quantidadeEmLocacao,
      preco
    }, { new: true });
    
    if (!updatedProduct) {
      response.status(404).json({ message: 'Produto não encontrado' });
      return;
    }

    response.status(200).json(updatedProduct);
  } catch (error) {
    response.status(500).json({ message: 'Erro ao atualizar produto', error });
  }
};

export const deleteProduct = async (request: Request, response: Response): Promise<void> => {
  try {
    const { id } = request.params;
    const deletedProduct = await Produto.findByIdAndDelete(id);
    if (!deletedProduct) {
      response.status(404).json({ message: 'Produto não encontrado' });
      return;
    }

    response.status(200).json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    response.status(500).json({ message: 'Erro ao deletar produto', error });
  }
};
