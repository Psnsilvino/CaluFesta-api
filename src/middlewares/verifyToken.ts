import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from '../zod';

export const verifyToken = (request: Request, response: Response, next: NextFunction) => {

    const token = request.cookies.token;

    if (!token) response.status(401).json("usuario nao autenticado");

    try {
        const decoded = jwt.verify(token, env.JWT_SECRET)
    } 
    catch (error) {
        
    }
}