import express from 'express';
import { controller } from './user.controller';

export const userRouter = express.Router();

userRouter.post("/createUser", controller.createUserController);
userRouter.get("/users", controller.getAllUser)
