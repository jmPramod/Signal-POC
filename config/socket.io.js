import { Server } from "socket.io";
import http from "http";
import express from "express";
import { signalModel } from "../models/signal.schema.js";
import { signalHistoryModel } from "../models/signal.history.js";
import moment from "moment";
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  addTrailingSlash: false ,
  cors: {
    origin: "*",
  },
});

// Used to store the users
let socketMap = {};
const serverStartTime = moment();
const chartData = []
let onlineuser=[]
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userID = socket.handshake.query.userID;
  console.log("userID",userID);
  
  if (userID) {
    const userObj = JSON.parse(userID);
    const isEmailExists = Object.values(socketMap).some(
      (user) => user.email === userObj.email
    );

    // Store only the name and imageUrl in the socketMap
    if (!isEmailExists) {
      // Store only the name and imageUrl in the socketMap if email is unique
      onlineuser.push({
        name: userObj.name,
        email: userObj.email,
        image: userObj.images?.imageUrl || null, // Default to null if no imageUrl
      })
      socketMap[socket.id] = {
        name: userObj.name,
        email: userObj.email,
        image: userObj.images?.imageUrl || null, // Default to null if no imageUrl
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

        
        const timestamp = moment().local().toDate();  
            const signalHistoryDoc = new signalHistoryModel({
          signalId: randomObject.signalId,
          signalColor: randomObject.signalColor,
          description: randomObject.description,
          img_url:randomObject.img_url,
          danger:randomObject.danger,
          timestamp: new Date(timestamp).toLocaleString(),  });
         const data2 = await signalHistoryModel.aggregate([
        {
          $group: {
            _id: "$signalColor",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            keyValue: { k: "$_id", v: "$count" }, 
          },
        },
        {
          $group: {
            _id: null,
            keyValues: { $push: "$keyValue" },
          },
        },
        {
          $replaceRoot: {
            newRoot: { $arrayToObject: "$keyValues" },
          },
        },
      ]);

      const elapsedSeconds = moment().diff(serverStartTime, "seconds");
      const newChartEntry = {
        sec: `${elapsedSeconds}s`,
        red: data2[0]?.red || 0,
        yellow: data2[0]?.yellow || 0,
        green: data2[0]?.green || 0,
      };
      console.log("newChartEntry",newChartEntry);
      
      chartData.push(newChartEntry);
      if (chartData.length > 6) {
        chartData.shift();
      }
        

        const newObj={ signalId: randomObject.signalId,
          signalColor: randomObject.signalColor,
          description: randomObject.description,
          img_url:randomObject.img_url,
          danger:randomObject.danger,
          chartData:chartData,
          timestamp: new Date(timestamp).toLocaleString(), }
          let dataDb=  await signalHistoryDoc.save();
        io.emit("message",  {
          ...dataDb._doc, // Spread saved data from MongoDB
          chartData, // Include the chartData array
        });
        console.log("socketMap",socketMap);
        
        // io.emit("getonlineuser", socketMap); 
        // clearInterval(intervalId);
        // console.log("Sent random object:", newObj);
       
      // console.log("dataDb",dataDb);
      
            }
    } catch (error) {
      console.error("Error fetching or saving random signal:", error);
    }
  }, 4000);

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id); if (socketMap[socket.id]) {
      const disconnectedUser = socketMap[socket.id];
      console.log("Disconnected user:", disconnectedUser);
  
      // Remove the user from onlineuser array
      onlineuser = onlineuser.filter(user => user.email !== disconnectedUser.email);
  
      // Remove the user from the socketMap
      delete socketMap[socket.id];
  
      // Emit the updated online users list
      io.emit("getonlineuser", onlineuser);
    }
    clearInterval(intervalId);  
  });
});

export { io, app, server };
