import { Schema, model } from 'mongoose';
import { Client } from '../interfaces/Client';

const clientSchema = new Schema<Client>({
	
	nome: {
		type: String,
		required: true,
		trim: true,
	},
	
	email: {
		type: String,
		required: true,
		trim: true,
	},
	
	endereco: {
		type: String,
		required: true,
		trim: true,
	},
	
	telefone: {
		type: Number,
		required: true,
	},
	
}, {
	timestamps: true 
});

const client = model<Client>('Client', clientSchema);

export default client;