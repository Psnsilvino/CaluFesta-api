import { Router } from "express";
import productRouter from "./products";
import userRouter from "./users";
import clientRouter from "./clients";
import locationRouter from "./locations";
import locatedProductRouter from "./locatedProduct";

const router = Router();

router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/clients", clientRouter);
router.use("/locations", locationRouter);
router.use("/locatedProducts", locatedProductRouter);

export default router;