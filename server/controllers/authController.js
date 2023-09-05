const userModel = require("../models/userModel")
const asyncHandler=require("express-async-handler")

const registerUser=asyncHandler(async(req,res)=>{
    const {username,email, password}=req.body

    const newUser= await userModel.create({username,email,password})

    console.log(newUser);
})

const loginUser=asyncHandler(async(req,res)=>{
    const {userIdentity, password}=req.body


})

module.exports={registerUser, loginUser}