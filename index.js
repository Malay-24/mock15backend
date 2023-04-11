







const express=require("express");
const cors=require("cors")
const {connection}=require("./db")
require("dotenv").config()
const {userRouter}=require("./routes/User.routes")

const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("homepage is this one")
})

app.use("/users",userRouter)


app.listen(8080,async()=>{
    await connection
    console.log("server is running at port 8080")
})
