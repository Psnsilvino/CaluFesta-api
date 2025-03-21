import { Request, Response } from "express";
import User from '../models/user.model';
import { loginSchema, registerUserSchema, updateUserSchema } from "../zod";
import { generateToken } from "../utils/generateToken";
import { env } from '../zod';
import { CustomRequest } from "../interfaces/customRequest";

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

    if (user.success) {
        try {
            const newUser = new User(user.data);
            const userSalvo = newUser.save();
            response.status(201).json(userSalvo);
        } 
		catch (error) {
            response.sendStatus(500).json(error)
        }
    } 
	else {
        response.status(500).json(user.error.message);
    }
}

export const login = async (request: Request, response: Response): Promise<void> => {

	const user = loginSchema.safeParse(request.body);

	try {
		const loggedUser = await User.findOne(user.data);

        if (loggedUser) {
			const token = generateToken(loggedUser._id);

			response.cookie("token", token, {
				httpOnly: true,
				secure: env.NODE_ENV === "production",
				sameSite: "strict",
				maxAge: 24 * 60 * 60 * 1000
			});

			response.status(200).json({
				success: true,
				message: "Usuario logado",
				user: {
					loggedUser,
					password: undefined
				}
			});
		}
		
        else response.status(500).json("usuario nao encontrado");
	} 
	catch (error) {
		response.status(500).json({ message: 'Erro ao obter produtos', error });
	}
};

export const logout = async (request: Request, response: Response): Promise<void> => {

	response.clearCookie('token', {
        httpOnly: true,
		secure: env.NODE_ENV === "production",
		sameSite: "strict",           
    }).status(200).json({ message: 'Logout bem-sucedido. Cookie removido.' });;
}

export const updateUser = async (request: Request, response: Response): Promise<void> => {

	const user = updateUserSchema.safeParse(request.body)

	if (user.success) {
		try {

			const { id } = request.params;
			const updatedProduct = await User.findByIdAndUpdate(id, user.data, { new: true });

			if (!updatedProduct) response.status(404).json({ message: 'Produto não encontrado' });

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
		
		if (!deletedUser) response.status(404).json({ message: 'Usuario não encontrado' });
		
		response.status(200).json({ message: 'Usuario deletado com sucesso' });
	} 
	catch (error) {
		response.status(500).json({ message: 'Erro ao deletar o usuario', error });
	}
}; 

export const checkAuth = async (req: CustomRequest, res: Response): Promise<void> => {
  try {
    if (!req.userId) {
      res.status(401).json({ success: false, message: "Unauthorized - no userId provided" });
      return;
    }

    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      res.status(400).json({ success: false, message: "User not found" });
      return;
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error("Error in checkAuth ", error);
    res.status(400).json({ success: false, message: error instanceof Error ? error.message : "Unexpected error" });
  }
};
