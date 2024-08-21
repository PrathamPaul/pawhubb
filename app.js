const express = require('express');
const app = express();
const path = require("path");

app.get("/res",(req,res)=>{

    // res.send("hello world")

    res.sendFile(path.join(__dirname,"Public/res.html"))
})
app.listen(3000,()=>{
    console.log("app is running at port 3000")
})