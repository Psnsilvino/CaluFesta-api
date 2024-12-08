import { Document } from 'mongoose';

export interface LocatedProduct extends Document {
	produto: string;
	nomeProduto: string;
	locacao: string;
	quantidade: number;
	preco: number;
} 