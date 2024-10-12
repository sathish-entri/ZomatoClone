const mongoose=require("mongoose")

const userschema= new mongoose.Schema({
fname:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
mobile:{
    type:Number,
    required:true
},
password:{
    required:true,
    type:String,

}
})
module.exports=mongoose.model("register",userschema)