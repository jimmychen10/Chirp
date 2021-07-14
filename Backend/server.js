import express from "express" // es6 way
import core from "core"


// const express  = require("express")

const app = express()

// app.get("/", (req,res)=>{
//     res.send("Chirp Server started")
// })

// app.listen(3000,()=> console.log("Testing something"))

app.use(cors())

app.use(express.json()) // body parser

app.use("/api/v1/newsFeed", newsFeed)
app.use("*", (req,res)=>
    res.status(404).json({
        
    })
)