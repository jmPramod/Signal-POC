import express from "express";
import {
  addSignal,
  fetchSignal,
  sendSignal,
} from "../controller/signal.controller.js";
import { verifyToken } from "../midddlewears/verify.toke.js";

export const signalRoute = express.Router();

signalRoute.post("/add-signal", addSignal);

signalRoute.post("/send-signal", verifyToken, sendSignal);
signalRoute.get("/fetch-signal", verifyToken, fetchSignal);
