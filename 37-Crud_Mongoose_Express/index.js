const express = require("express");
const res = require("express/lib/response");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopApp",{ useNewUrlParser:true,useUnifiedTopology:true} )
    .then(() => {
        console.log("Connection Open..");
    })
    .catch((err) => {
        console.log("Error Establishing Connection");
        console.log(err);
    })

app.set("views",__dirname+"/views");
app.set("view engine","ejs")

app.listen(3000,() => {
    console.log("Listening At Port 3000");
})

app.get("/",(req,res) => {
    res.send("woof");
})