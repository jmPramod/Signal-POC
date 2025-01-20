
import multer from "multer"
import {CloudinaryStorage} from "multer-storage-cloudinary"
import { v2 as cloudinaryImage } from 'cloudinary';

const ProfileStorage = new CloudinaryStorage({
    cloudinary: cloudinaryImage,
    params: {
        folder: 'PocProfileImage',
        transformation: [
            { width: 800, height: 600, crop: 'limit' },
            { quality: 'auto' },
            { fetch_format: 'auto' },
            { progressive: true },
            { strip: true }
        ]
    },
});

export const uploadProfile = multer({ storage: ProfileStorage });

