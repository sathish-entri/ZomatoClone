const express =require("express")
const route = express.Router()
const validation = require("../controllers/usercontroller")
const login = require("../controllers/logincontroller")
const datas=require("../controllers/datascontroller")
const filter=require("../controllers/filtercontroller")
const cusine=require("../controllers/cusine")

route.get("/",datas)
route.post("/register",validation)
route.post("/login",login)
route.post("/filter",filter)
route.post("/home/cusine",cusine)

module.exports=route