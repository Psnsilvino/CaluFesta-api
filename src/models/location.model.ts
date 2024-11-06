import { Schema, model, Document } from 'mongoose';

interface ILocation extends Document {
	data_inicio: Date;
	data_fim: Date;
	cliente: string;
	endereco: string;
	pagamento: string;
} 


const locationSchema = new Schema<ILocation>({
	
	data_inicio: {
		type: Date,
		required: true,
		
	},

	data_fim: {
		type: Date,
		required: true,
		
	},
	
	cliente: {
		type: String,
		required: true,
        trim: true,
		
	},
	
	endereco: {
		type: String,
		required: true,
		trim: true,
	},
	
	pagamento: {
		type: String,
		required: true,
		trim: true,
	},
	
}, {
	timestamps: true 
});

const location = model<ILocation>('Produto', locationSchema);

export default location;