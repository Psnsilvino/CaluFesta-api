import { Schema, model, Document } from 'mongoose';

interface ILocation extends Document {
	data_inicio: Date;
	data_fim: Date;
	id_user: string;
	endereco: string;
	pagamento: string;
    produtos: string;
} 


const locationSchema = new Schema<ILocation>({
	
	data_inicio: {
		type: Date,
		required: true,
		
	},
	
	id_user: {
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
	
	produtos: {
		type: String,
		required: true,
	
	}

 
	
}, {
	timestamps: true 
});

const location = model<ILocation>('Produto', locationSchema);

export default location;