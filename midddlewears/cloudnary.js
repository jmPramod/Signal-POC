import dotenv from "dotenv"
// import cloudinaryImage
dotenv.config()
import { v2 as cloudinary } from 'cloudinary';


export const cloudinaryImage= cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,

  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECREAT,
});

