const express=require("express")
// const mongoose=require("mongoose")
const userschema=require("../models/userschema")
const bcrypt = require('bcrypt');

async function login(req,res){
const {email,password}= await req.body
  if(!email || !password){
    res.status(400).json({message:"all filed manitory"})
    // throw new Error("all field are manitaory")
  }else{
    var emailverified = await userschema.findOne({email:email})
    // console.log(emailverified.password)
   if(!emailverified){
    res.status(400).json({email:"email invalid"})
    console.log("invalid email")
   }else{
    const comparepassword= await bcrypt.compare(password,emailverified.password)
    // console.log(comparepassword)
    if(comparepassword){
        res.status(200).send(true)
        console.log("login success")
    }else{
        console.log("login failed")
        res.status(400).json({password:"password incorrect"})
    }
   }
  }
}

module.exports=login