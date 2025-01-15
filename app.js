import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { signalRoute } from "./routes/router.js"
dotenv.config()
const port=process.env.PORT
const app=express()
//middlewear
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: '*',
    credentials: true,
  }));

app.use("/",signalRoute)  

//server is running on
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}/`);
    
})