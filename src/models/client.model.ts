import { Schema, model, Document } from 'mongoose';

interface IClient extends Document {
	nome: string;
	email: string;
	endereco: string;
	telefone: number;
} 


const clientSchema = new Schema<IClient>({
	
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

const client = model<IClient>('Client', clientSchema);

export default client;