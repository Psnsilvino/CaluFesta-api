import { Schema, model } from 'mongoose';
import { Location } from '../interfaces/Location';

const locationSchema = new Schema<Location>({
	
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

const location = model<Location>('Location', locationSchema);

export default location;