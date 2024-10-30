import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
	nome: string
	email: string;
    senha: string;
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
        trim: true
    }
	
}, {
	timestamps: true 
});

const user = model<IUser>('User', userSchema);

export default user;