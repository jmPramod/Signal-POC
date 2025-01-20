import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { authModel } from "../models/authSchema.js";
import { createError } from "../midddlewears/errorHandle.js";
import dotenv from "dotenv";
import cloudinaryImage from "../midddlewears/cloudnary.js";
// import { cloudinaryImage } from "../midddlewears/cloudnary.js";

dotenv.config();
export const signUpController = async (req, res, next) => {
  try {
    let signUpData;
    const saltRounds = 10;
    const hashPass = await bcrypt.hash(req.body.password, saltRounds);

    req.body.password = hashPass;
    const data = new authModel(req.body);
    const userEmailExist = await authModel.findOne({ email: req.body.email });
    if (userEmailExist) {
      return next(createError(404, "Email Already User"));
    }
    const userPhoneExist = await authModel.findOne({ phone: req.body.phone });
    if (userPhoneExist) {
      return next(createError(404, "Account Exist for this Phone Number"));
    }
    signUpData = await data.save();
    const token = jwt.sign(
      { email: signUpData.email, id: signUpData._id },
      process.env.SECRET_KEY
    );
    res.status(200).json({
      data: signUpData,
      statusCode: 200,
      message: "User Created Successfully.",
      errorMessage: null,
      token: token,
    });
  } catch (err) {
    next(err);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //validation
    const userExist = await authModel.findOne({ email: email });
    if (!userExist) {
      return next(createError(404, "Invalid User."));
    }
    const isPassword = await bcrypt.compare(password, userExist.password);
    if (!isPassword) {
      return next(createError(404, "Invalid Password."));
    }
    // JWT token generation
    const token = jwt.sign(
      { email: userExist.email, id: userExist._id },
      process.env.SECRET_KEY
    );
    console.log("token", token);

    res.header("token", `${token}`);

    res.cookie("access_token", token, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      secure: true,
    });

    res.status(200).json({
      data: userExist,
      statusCode: 200,
      message: "User logged in successfully.",
      errorMessage: null,
      token: token,
    });
  } catch (err) {
    next(err);
  }
};

export const profileUpdateController = async (req, res, next) => {
  try {
    const oldData = await authModel.findById(req.params.id);

    let existingImages = {};
    if (req.files && req.files.length > 0) {
      const urlPath = req.files[0].path;
      const q = urlPath.split(".")[2].split("/");
      const PublicID = q[q.length - 2].concat("/", q[q.length - 1]);

      existingImages = {
        imageUrl: urlPath,
        imgPublicId: PublicID,
      };
      console.log("existingImages",existingImages);
      
      if (oldData.images.imgPublicId) {
        console.log("oldData.images.imgPublicId",oldData.images.imgPublicId);
        
        await cloudinaryImage.uploader.destroy(
          oldData.images.imgPublicId,
          (error, result) => {
            if (error) {
              console.error("Error deleting thumbnail image:", error);
            } else {
              console.log("Deleted thumbnail image:", result);
            }
          }
        );
      }
      req.body.images = existingImages;
    }
    if (req.body.password) {
      const isPassword = await bcrypt.compare(
        req.body.password,
        oldData.password
      );
      if (!isPassword) {
        return next(createError(404, "Your previous Password is incorrect "));
      } else {
        const saltRounds = 10;
        const password = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = password;
      }
    }
    const userToUpdate = await authModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      message: "User update Successfully.",
      data: userToUpdate,
      statusCode: 200,
    });
  } catch (error) {
    next(error);
  }
};
