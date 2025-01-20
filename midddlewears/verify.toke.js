import { createError } from "./errorHandle.js";
import jwt from "jsonwebtoken"
export const verifyToken = (req, res, next) => {
    // const bearerToken = req.headers['authorization']
    const authorizationHeader = req.header('Authorization');
    console.log("authorizationHeader",authorizationHeader);
    
    if (!authorizationHeader) return next(createError(401, 'Access denied. No token provided.'));
    const tokenArray = authorizationHeader.split(' ');
    if (tokenArray.length !== 2 || tokenArray[0] !== 'Bearer') {
      return next(createError(401, 'Invalid authorization header format.'));
    }
    const token = tokenArray[1];
    if (!token) return next(createError(401, 'Access denied. No token provided.'))
  
    try {
      req.token = token
      jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
  
          return next(createError(401, 'Token is not Valid'));
        }
  
        req.user_info = user;
        next();
      });
    }
    catch (err) {
  console.log("err",err);
  
      return next(createError(401, 'Token Required!'));
  
    }
  };