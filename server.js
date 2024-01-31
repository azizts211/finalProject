const express=require("express")
const app=express()
const connectDB=require("./config/connectDB")
const cors=require("cors")
const port=5000
app.use(cors({origin:'http://localhost:3000'}))

app.use(express.json())
connectDB()
app.use("/api/",require("./routes/userRoutes"))

app.listen(port,(err)=>{
    err?console.log(err):console.log("server is running on port 5000")
})