import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../handlers/products";

const userRouter = Router();

userRouter.get("/", getProducts);
userRouter.post("/register", createProduct);
userRouter.get("/:id", getProduct);
userRouter.put("/:id", updateProduct);
userRouter.delete("/:id", deleteProduct);

export default userRouter;