const express=require("express")
const mongoose=require("mongoose")
const userschema=require("../models/userschema")
const bcrypt = require('bcrypt');
require("dotenv").config()

async function validation(req,res){
 const {fname, email,mobile,password,} =await req.body
//  res.send("success")
// console.log(req.body)
 if(!fname || !email || !mobile || !password ){
    res.status(400).send("all field are manitory")
 }else{
    const emailverified = await userschema.findOne({email:email})
    if(emailverified){
        res.status(400).send("Already registered in this account")
        // throw new Error("email already exists")
    }else{
    //   const passwordhashing=await bcrypt.hash(password, process.env.saltRounds)
const saltRounds=10
     const salts=await bcrypt.genSalt(saltRounds)
        
        const passwordhashing=await bcrypt.hash(password, salts)
          
            // Store hash in your password DB.
        const user =userschema.create({
            fname:fname,
            email:email,
            mobile:mobile,
            password:passwordhashing
           
        })

        if(user){
            res.status(200).send("register sucessfully")
            console.log("submited success")
        }else{
            res.status(400)
            // throw new Error("user not valid")
        }
    }
 }
}

module.exports=validation