const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    destination:String,
    travellers:Number,
    budget:Number
})

const UserModel=mongoose.model("user",userSchema)

module.exports={UserModel}