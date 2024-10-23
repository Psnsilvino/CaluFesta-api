import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, getProductsByCategory, updateProduct } from "../handlers/products";

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.get("/:categoria", getProductsByCategory);
productRouter.post("/register", createProduct);
productRouter.get("/:id", getProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;