import { Router } from "express";
import { checkAuth, deleteUser, getUsers, login, logout, register, updateUser } from "../handlers/users";
import { verifyToken } from "../middlewares/verifyToken";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.get("/teste", verifyToken, checkAuth);

export default userRouter;