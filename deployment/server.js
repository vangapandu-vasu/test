const express = require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("deployed");
})

app.listen(9000,()=>{
    console.log("server is running");
});