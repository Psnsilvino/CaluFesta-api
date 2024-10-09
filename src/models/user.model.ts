import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
	nome: string;
	email: string;
	senha: string;
	endereco: string;
	telefone: number;
    tipo_user: string;
} 


const userSchema = new Schema<IUser>({
	
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
	
	senha: {
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
		min: 11,
        max: 11,
	},

    tipo_user: {
        type: String,
        required: true,
        default: 'cliente',

    }
	
}, {
	timestamps: true 
});

const user = model<IUser>('Produto', userSchema);

export default user;