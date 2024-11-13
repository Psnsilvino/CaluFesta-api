import { Request, Response } from "express";
import User from '../models/user.model';
import { registerUserSchema, updateUserSchema } from "../zod";

export const getUsers = async (request: Request, response: Response): Promise<void> => {
	try {
		const users = await User.find();
		response.status(200).json(users);
	} 
	catch (error) {
		response.status(500).json({ message: 'Erro ao obter produtos', error });
	}
};

export const register = async (request: Request, response: Response) => {
    const user = registerUserSchema.safeParse(request.body)

    if(user.success) {
        try {
            const newUser = new User(user.data)
            const userSalvo = newUser.save()
            response.status(201).json(userSalvo)
        } catch (error) {
            console.log(error)
            response.sendStatus(500)
        }
    } else {
        response.status(500).json(user.error.message);
    }
}

export const login = async (request: Request, response: Response): Promise<void> => {

	const { email, senha } = request.body;
	try {
		const user = await User.findOne({ email: email, senha: senha });
        if (user) response.status(200).json({"pomba": user});
        else response.status(500).json("usuario nao encontrado");
	} 
	catch (error) {
		response.status(500).json({ message: 'Erro ao obter produtos', error });
	}
};

export const updateUser = async (request: Request, response: Response): Promise<void> => {

	const user = updateUserSchema.safeParse(request.body)

	if (user.success) {
		try {

			const { id } = request.params;
			const updatedProduct = await User.findByIdAndUpdate(id, user.data, { new: true });

			if (!updatedProduct) {
				response.status(404).json({ message: 'Produto não encontrado' });
			}

			response.status(200).json(updatedProduct);
		} 
		catch (error) {
			response.status(500).json({ message: 'Erro ao atualizar o usuario', error });
		}
	} 
	else {
		response.status(500).json(user.error.message);
	}
};

export const deleteUser = async (request: Request, response: Response): Promise<void> => {
	try {
		const { id } = request.params;
		const deletedUser = await User.findByIdAndDelete(id);
		
		if (!deletedUser) {
			response.status(404).json({ message: 'Usuario não encontrado' });
		}
		
		response.status(200).json({ message: 'Usuario deletado com sucesso' });
	} 
	catch (error) {
		response.status(500).json({ message: 'Erro ao deletar o usuario', error });
	}
};