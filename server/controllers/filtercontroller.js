const dataschema=require("../models/dataschema")

async function filter(req,res){
    const{city_name,type}=req.body
 console.log(req.body)
 console.log("backend")
 
    if(city_name && type){
        let citynamefiltering= await dataschema.find({city_name:city_name}).where("type.name").equals(type)
       if(citynamefiltering.length>0){
        res.status(200).json(citynamefiltering)
       }else{
        res.status(400).json(true)
       }       
    }else{
        if(!city_name && type){
            let restuarentfiltering = await dataschema.where("type.name").equals(type)
           
            if(restuarentfiltering.length>0){
              console.log("eruku")
              
                res.status(200).json(restuarentfiltering)
               }else{
                res.status(400).json(true)
               }
        }  
    }
      
}
module.exports=filter

// const responsetypevalue = citynamefiltering.filter((ress)=>{
//     return ress.type.map((rest)=>{
//          return rest.filter((val)=>{
//          //    return val.name ==type?typenames.push(val):normalname=val
//           return val.name==type
//         })
//     })
     
//  })