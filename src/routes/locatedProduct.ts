import express from 'express';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../handlers/locatedProducts';

const locatedProductRouter = express.Router();

locatedProductRouter.post('/', createProduct);
locatedProductRouter.get('/', getProducts);
locatedProductRouter.get('/:id', getProductById);
locatedProductRouter.put('/:id', updateProduct);
locatedProductRouter.delete('/:id', deleteProduct);

export default locatedProductRouter;
