import { Schema, model } from 'mongoose';
import { User } from '../interfaces/User';

const userSchema = new Schema<User>({
	
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
        trim: true
    }
	
}, {
	timestamps: true 
});

const user = model<User>('User', userSchema);

export default user;