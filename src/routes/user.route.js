import { Router } from "express";
import userController from "../controllers/user.controller.js";
import { validId, validUser } from "../middlewares/global.middlewares.js";

const userRouter = Router();

userRouter.post("/", userController.create);
userRouter.get("/", userController.findAll);
userRouter.get("/:id", validId, validUser, userController.findById);
userRouter.patch("/:id", validId, validUser, userController.update);

export default userRouter;
