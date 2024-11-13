import { Router } from "express";
import productRouter from "./products";
import userRouter from "./users";
import clientRouter from "./clients";

const router = Router();

router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/clients", clientRouter);

export default router;