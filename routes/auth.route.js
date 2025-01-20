
import express from "express"
import { loginController, signUpController,profileUpdateController } from "../controller/auth.controller.js";
import { uploadProfile } from "../midddlewears/cloudinary.multer.js";

export const authRoute= express.Router()

authRoute.post('/api/register', signUpController);
authRoute.post('/api/login', loginController);
authRoute.patch('/api/update-profile/:id', uploadProfile.any(),profileUpdateController);