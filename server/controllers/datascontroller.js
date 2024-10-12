const dataschema=require("../models/dataschema")

async function datas(req,res){
    const alldatas= await dataschema.find()
    res.status(200).send(alldatas)
}
module.exports=datas