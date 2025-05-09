const express = require("express");
const app=express();

app.listen(dotenv.process.PORT() || 9000,()=>{
    console.log("server is running");
});