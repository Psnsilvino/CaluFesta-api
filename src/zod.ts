import { z } from "zod";

const envSchema = z.object({
    MONGO_URI: z.string().url(),
    PORT: z.string(),
    JWT_SECRET: z.string(),
    NODE_ENV: z.string(),
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

export const registerUserSchema = z.object({
    nome: z.string(), 
    email: z.string(), 
    senha: z.string(), 
});

export const loginSchema = z.object({
    email: z.string(), 
    senha: z.string(), 
});

export const updateUserSchema = z.object({
    nome: z.string().nullish(), 
    email: z.string().nullish(), 
    senha: z.string().nullish(), 
});

export const createClientSchema = z.object({
    nome: z.string(), 
    email: z.string(), 
    endereco: z.string(), 
    telefone: z.string(), 
});

export const updateClientSchema = z.object({
    nome: z.string().nullish(), 
    email: z.string().nullish(), 
    endereco: z.string().nullish(), 
    telefone: z.string().nullish(),
});

export const createLocationSchema = z.object ({
	data_inicio: z.string(),
	data_fim: z.string(),
	cliente: z.string(),
	endereco: z.string(),
	pagamento: z.string(),
    concluida: z.boolean()
});

export const updateLocationSchema = z.object ({
	data_inicio: z.string().nullish(),
	data_fim: z.string().nullish(),
	cliente: z.string().nullish(),
	endereco: z.string().nullish(),
	pagamento: z.string().nullish(),
    concluida: z.boolean().nullish()
});

export const createLocatedProductSchema = z.object ({
	produto: z.string(),
	locacao: z.string(),
	quantidade: z.number(),
});

export const updateLocatedProductSchema = z.object ({
	produto: z.string().nullish(),
	locacao: z.string().nullish(),
	quantidade: z.number().nullish(),
});