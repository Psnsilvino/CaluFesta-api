import { Document } from 'mongoose';

export interface User extends Document {
	nome: string
	email: string;
    senha: string;
} 