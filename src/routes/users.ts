import { Router } from "express";
import { deleteUser, getUsers, login, register, updateUser } from "../handlers/users";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;