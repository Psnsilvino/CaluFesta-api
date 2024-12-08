import express from 'express';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct, getLocationProducts } from '../handlers/locatedProducts';
import { verifyToken } from '../middlewares/verifyToken';

const locatedProductRouter = express.Router();

locatedProductRouter.post('/', verifyToken, createProduct);
locatedProductRouter.get('/', verifyToken, getProducts);
locatedProductRouter.get('/:idLocacao', verifyToken, getLocationProducts);
locatedProductRouter.get('/:id', verifyToken, getProductById);
locatedProductRouter.put('/:id', verifyToken, updateProduct);
locatedProductRouter.delete('/:id', verifyToken, deleteProduct);

export default locatedProductRouter;
