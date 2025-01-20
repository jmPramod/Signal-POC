import dotenv from "dotenv"
// import cloudinaryImage
dotenv.config()
import { v2 as cloudinaryImage } from 'cloudinary';


 cloudinaryImage.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,

  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECREAT,
});

export default cloudinaryImage;
