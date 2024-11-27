import { Document } from 'mongoose';

export interface Location extends Document {
	data_inicio: Date;
	data_fim: Date;
	cliente: string;
	endereco: string;
	pagamento: string;
} 