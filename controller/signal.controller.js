import { createError } from "../midddlewears/errorHandle.js";
import { signalHistoryModel } from "../models/signal.history.js";
import { signalModel } from "../models/signal.schema.js";

export const addSignal = async (req, res, next) => {
  try {
    const data = new signalModel(req.body);
    const userSignalExist = await signalModel.findOne({
      signalId: req.body.signalId,
    });
    if (userSignalExist) {
      return next(createError(404, "Signal already Exist."));
    }
    const signalData = await data.save();
    res.status(200).json({
      data: signalData,
      statusCode: 200,
      message: "Signal Created Successfully.",
      errorMessage: null,
    });
  } catch (error) {
    next(error);
  }
};
export const sendSignal = async (req, res, next) => {
  try {
    const data = new signalHistoryModel(req.body);

    const signalData = await data.save();
    res.status(200).json({
      data: signalData,
      statusCode: 200,
      message: "Signal sent Successfully.",
      errorMessage: null,
    });
  } catch (error) {
    next(error);
  }
};
export const fetchSignal = async (req, res, next) => {
  try {
    const userSignalExist = await signalHistoryModel
      .find()
      .sort({ _id: -1 })
      .limit(10);

    res.status(200).json({
      data: userSignalExist,
      statusCode: 200,
      message: "Signal Created Successfully.",
      errorMessage: null,
    });
  } catch (error) {
    next(error);
  }
};
