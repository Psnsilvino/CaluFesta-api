import { Schema, model, Document } from 'mongoose';

// Interface que define a estrutura de um Produto
interface IProduct extends Document {
  nome: string;
  categoria: string;
  quantidade: number;
  quantidadeEmLocacao: number;
  preco: number;
}

// Definindo o Schema do Produto
const productSchema = new Schema<IProduct>({

  nome: {
    type: String,
    required: true,
    trim: true,
  },

  categoria: {
    type: String,
    required: true,
    trim: true,
  },

  quantidade: {
    type: Number,
    required: true,
    min: 0,
  },

  quantidadeEmLocacao: {
    type: Number,
    default: 0,
    min: 0,
  },

  preco: {
    type: Number,
    required: true,
    min: 0,
  }
  
}, {
  timestamps: true // Adiciona createdAt e updatedAt automaticamente
});

// Criando o modelo Produto
const produto = model<IProduct>('Produto', productSchema);

export default produto;