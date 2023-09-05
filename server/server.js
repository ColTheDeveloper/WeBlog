const express= require("express")
const cors= require("cors")
const bodyParser = require("body-parser")
const dotenv=require("dotenv")
const authRoute=require("./routes/authRoute")
const { default: mongoose } = require("mongoose")



const app= express()
dotenv.config()

const PORT=process.env.PORT
const MONGODB_URL=process.env.MONGODB_URL

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

mongoose.connect(MONGODB_URL)
        .then(()=>console.log("DB connected Successfully"))
        .catch((error)=>console.log(error))

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use("/auth",authRoute)