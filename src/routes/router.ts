import { Router } from "express";
import productRouter from "./products";
import userRouter from "./users";
import clientRouter from "./clients";
import locationRouter from "./locations";

const router = Router();

router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/clients", clientRouter);
router.use("/locations", locationRouter);

export default router;