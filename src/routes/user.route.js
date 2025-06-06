import { Router } from "express";
import userController from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/", userController.create);
userRouter.get("/", userController.findAll);
userRouter.get("/:id", userController.findById);
userRouter.patch("/:id", userController.update);

export default userRouter;
