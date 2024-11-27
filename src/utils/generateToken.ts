import jwt from 'jsonwebtoken'
import { env } from '../zod';

const secret = env.JWT_SECRET

export const generateToken = (userId: unknown) => {
    const token = jwt.sign({ userId }, secret, {
        expiresIn: "1d"
    });

    return token;
}