
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { signalRoute } from "./routes/router.js";
import { connectMongooseDB } from "./config/connect.db.js";
import { app, server } from "./config/socket.io.js";
import { authRoute } from "./routes/auth.route.js";
import cookies from "cookie-parser"
dotenv.config();
const port = process.env.PORT ;



// Middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());
// Routes
app.use("/", signalRoute);
app.use("/", authRoute);
 //! Error handing  middleware
 app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(statusCode).json({
    data: null,
    statusCode: statusCode,
    message: null,
    errorMessage:errorMessage,
    stacks: err.stack,
  });
});
// Connect to MongoDB
connectMongooseDB();

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
