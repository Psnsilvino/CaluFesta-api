import { Schema, model } from 'mongoose';
import { LocatedProduct } from '../interfaces/LocatedProduct';

const locatedProductSchema = new Schema<LocatedProduct>({
	
	produto: {
		type: String,
		required: true,
		trim: true,
	},
	
	locacao: {
		type: String,
		required: true,
		trim: true,
	},
	
	quantidade: {
		type: Number,
		required: true,
		min: 0,
	}
	
}, {
	timestamps: true 
});

const alugado = model<LocatedProduct>('Alugado', locatedProductSchema);

export default alugado;