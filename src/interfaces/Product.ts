import { Document } from 'mongoose';

export interface Product extends Document {
	nome: string;
	categoria: string;
	quantidade: number;
	quantidadeEmLocacao: number;
	preco: number;
} 