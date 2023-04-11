
















const express=require("express");
const {UserModel}=require("../models/User.model")

const userRouter=express.Router()

userRouter.post("/post",async(req,res)=>{
    const payload=req.body
    try{
        const post= new UserModel(payload)
        await post.save()
        res.send("User Data Added")
    }catch(err){
        console.log(err)
        res.send("User Data is not stored")
    }
})

userRouter.get("/",async(req,res)=>{
    const high =req.query.budget;
    const low=req.query.budget

    const destination=req.query.destination
    let query={}

    let Sort=1
    if(high=="high"){
        Sort=-1
    }
    if(low=="low"){
        Sort=1
    }
    if(destination){
        query.destination=destination
    }
    try{
    let Data=await UserModel.find(query).sort({budget:Sort})
    res.send(Data)
}catch(err){
    res.send(err.mesage)
}

})

module.exports={userRouter}