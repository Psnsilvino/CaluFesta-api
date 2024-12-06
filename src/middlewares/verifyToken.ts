import { NextFunction, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from '../zod';
import { CustomRequest } from "../interfaces/customRequest";

export const verifyToken = (request: CustomRequest, response: Response, next: NextFunction) => {

    const token = request.cookies?.token;

    if (!token) response.status(401).json("usuario nao autenticado");

    try {
        const decoded = jwt.verify(token, env.JWT_SECRET as string) as JwtPayload;
        
        if (!decoded) {
            response.status(401).json("Token invalido");
            return;
        }
        
        request.userId = decoded.userId;
        next();
    } 
    catch (error) {
        response.status(500);
    }
}