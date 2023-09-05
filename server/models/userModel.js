const mongoose= require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        lowercase:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }

},{timestramp:true})

const userModel=mongoose.model("User",userSchema)

module.exports=userModel