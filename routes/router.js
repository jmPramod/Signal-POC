import express from "express"

export const signalRoute= express.Router()

signalRoute.get("/",(req,res,next)=>{

    res.send("API working")
})