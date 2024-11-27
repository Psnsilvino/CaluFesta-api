import { Document } from 'mongoose';

export interface LocatedProduct extends Document {
	produto: string;
	locacao: string;
	quantidade: number;
} 