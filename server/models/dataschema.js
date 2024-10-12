const mongoose=require('mongoose')

const dataschema= new mongoose.Schema({
    
name:{type:String},

city_name:{type:String},

city:{type:String},

area:{type:String},

locality:{type:String},

thumb:{type:String},
// "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e…"
cost:{type:Number},

address:{type:String},
// "Shop 1, Plot D,  Pitampura, New Delhi Complex, Chincholi, Delhi-110006…"

type:{type:Array},
// Array (2)

Cuisine:{type:Array},
// Array (2)
})

module.exports=mongoose.model("datas",dataschema)