import { Router } from "express";
import userController from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/", userController.create);
userRouter.get("/", userController.findAll);
userRouter.get("/:id", userController.findById);

export default userRouter;
