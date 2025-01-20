
import mongoose from 'mongoose';
const SignUpSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    password: { type: String, required: true, },
    images:
    {
      imageUrl: { type: String, default: "https://res.cloudinary.com/dtvq8ysaj/image/upload/v1720770108/Global%20Images/profile_new-removebg-preview_motz7n.png" },
      imgPublicId: { type: String, default: null }
    }
    ,
    cloudinaryPublicId: { type: String, default: null },
    
  },
  { timestamps: true }
);



export const authModel = mongoose.model('Users', SignUpSchema);
