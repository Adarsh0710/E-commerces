import express from 'express';
import { loginUser,registerUser,adminolgin } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.post('/admin',adminolgin)

export default userRouter;
