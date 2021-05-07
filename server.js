const express  = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("Chirp Server started")
})

app.listen(3000,()=> console.log("Testing something"))