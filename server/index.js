const express = require("express")
const mangodb =require("./config/db")
const app =express()
const route=require("./routes/user")
require("dotenv").config();
// const PORT =4000
const cors=require("cors")
const mongoose=require("mongoose")
const dataschema=require("./models/dataschema")

mangodb()

// console.log( mongoose.datas)


app.use(cors())
app.use(express.json())
app.use("/",route)
app.listen(process.env.PORT,()=>{
    console.log("server connect succesfully "+ process.env.PORT)
})

// app.get("/",(req,res)=>{
//     res.send("hello world")
// })