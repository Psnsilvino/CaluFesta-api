import { z } from "zod";

const envSchema = z.object({
    MONGO_URI: z.string().url(),
    PORT: z.string()
});

export const env = envSchema.parse(process.env);

export const createProductSchema = z.object({
    nome: z.string(), 
    categoria: z.string(), 
    quantidade: z.number(), 
    quantidadeEmLocacao: z.number(), 
    preco: z.number()
});

export const updateProductSchema = z.object({
    nome: z.string().nullish(), 
    categoria: z.string().nullish(), 
    quantidade: z.number().nullish(), 
    quantidadeEmLocacao: z.number().nullish(), 
    preco: z.number().nullish()
});