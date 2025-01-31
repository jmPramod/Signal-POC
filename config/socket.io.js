import { Server } from "socket.io";
import http from "http";
import express from "express";
import { signalModel } from "../models/signal.schema.js";
import { signalHistoryModel } from "../models/signal.history.js";
import moment from "moment";
import momentTZ from "moment-timezone";

const app = express();
const server = http.createServer(app);
const TIMEZONE = "Asia/Kolkata";
const io = new Server(server, {
  addTrailingSlash: false,
  cors: {
    origin: "*",
  },
});

// Used to store the users
let socketMap = {};
const serverStartTime = moment();
const chartData = [];
const chartData2 = [];
let elapsedSeconds=0
let onlineuser = [];
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userID = socket.handshake.query.userID;
  console.log("userID", userID);

  if (userID) {
    const userObj = JSON.parse(userID);
    const isEmailExists = Object.values(socketMap).some(
      (user) => user.email === userObj.email
    );

    if (!isEmailExists) {
        onlineuser.push({
        name: userObj.name,
        email: userObj.email,
        image: userObj.images?.imageUrl || null, 
      });
      socketMap[socket.id] = {
        name: userObj.name,
        email: userObj.email,
        image: userObj.images?.imageUrl || null, 
      };
    }
  }

  io.emit("getonlineuser", onlineuser);

  // set interval
  const intervalId = setInterval(async () => {
    try {
      const randomSignal = await signalModel.aggregate([
        { $sample: { size: 1 } },
      ]);

      if (randomSignal.length > 0) {
        const randomObject = randomSignal[0];

        const timestamp = moment().local(TIMEZONE).toDate();
        const signalHistoryDoc = new signalHistoryModel({
          signalId: randomObject.signalId,
          signalColor: randomObject.signalColor,
          description: randomObject.description,
          img_url: randomObject.img_url,
          danger: randomObject.danger,
          timestamp: moment(timestamp).format("YYYY-MM-DD HH:mm:ss [UTC]"),
        });
    


        elapsedSeconds++
        const newChartEntry = {
          sec: `${elapsedSeconds++}s`,
          red: randomObject.signalColor=="red"?1:0,
          yellow:  randomObject.signalColor=="yellow"?1:0,
          green:  randomObject.signalColor=="green"?1:0,
        };
      
        const newChartEntry2 = {
          date: moment().format("YYYY-MM-DD"),
          red: randomObject.signalColor=="red"?1:0,
          yellow:  randomObject.signalColor=="yellow"?1:0,
          green:  randomObject.signalColor=="green"?1:0,
        };
        chartData2.push(newChartEntry2);
        chartData.push(newChartEntry);
        if (chartData.length > 20) {
          chartData.shift();
        }

        if (chartData2.length > 25) {
          chartData2.shift();
        }
 
        let dataDb = await signalHistoryDoc.save();
        io.emit("message", {
          ...dataDb._doc, 
          chartData,
          chartData2:chartData2,
        });

      }
    } catch (error) {
      console.error("Error fetching or saving random signal:", error);
    }
  }, 4000);

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    if (socketMap[socket.id]) {
      const disconnectedUser = socketMap[socket.id];
      console.log("Disconnected user:", disconnectedUser);

      onlineuser = onlineuser.filter(
        (user) => user.email !== disconnectedUser.email
      );

      delete socketMap[socket.id];

      io.emit("getonlineuser", onlineuser);
    }
    clearInterval(intervalId);
  });
});

export { io, app, server };
