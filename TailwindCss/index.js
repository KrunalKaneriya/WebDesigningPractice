const express = require("express");
const app = express();
app.set("view engine","ejs");
app.set("views",__dirname+"/views");
app.use(express.static(__dirname + "/public"));


app.listen(3000,(req,res) => {
    console.log("Server Started");
})

app.get("/",(req,res) => {
    res.render("index");
})