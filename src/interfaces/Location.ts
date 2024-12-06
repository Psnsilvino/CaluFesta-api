import { Document } from 'mongoose';

export interface Location extends Document {
	data_inicio: string;
	data_fim: string;
	cliente: string;
	endereco: string;
	pagamento: string;
	concluida: boolean
} 