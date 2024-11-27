import { Document } from 'mongoose';

export interface Client extends Document {
	nome: string;
	email: string;
	endereco: string;
	telefone: number;
} 