import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, getProductsByCategory, updateProduct } from "../handlers/products";
import { verifyToken } from "../middlewares/verifyToken";
import { checkAuth } from "../handlers/users";

const productRouter = Router();

productRouter.get("/", verifyToken, getProducts);
productRouter.get("/:categoria", verifyToken, getProductsByCategory);
productRouter.post("/register", verifyToken, createProduct);
productRouter.get("/:id", verifyToken, getProduct);
productRouter.put("/:id", verifyToken, updateProduct);
productRouter.delete("/:id", verifyToken, deleteProduct);

export default productRouter;