import { Schema, model } from 'mongoose';
import { Product } from '../interfaces/Product';

const productSchema = new Schema<Product>({
	
	nome: {
		type: String,
		required: true,
		trim: true,
	},
	
	categoria: {
		type: String,
		required: true,
		trim: true,
	},
	
	quantidade: {
		type: Number,
		required: true,
		min: 0,
	},
	
	quantidadeEmLocacao: {
		type: Number,
		default: 0,
		min: 0,
	},
	
	preco: {
		type: Number,
		required: true,
		min: 0,
	}
	
}, {
	timestamps: true 
});

const produto = model<Product>('Produto', productSchema);

export default produto;