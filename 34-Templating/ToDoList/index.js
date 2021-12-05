const express = require("express");
const app = express();
const path = require("path");
const day = require("./date.js")

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")))

var items = ['Buying Food','Cooking Food','Eating Food'];

app.listen(3000,() => {
    console.log("Server Started At Port 3000");
})

app.get("/",(request,response) => {
   const date = new Date();
   const options = {
       weekday:'long',
       year:'numeric',
       month:'long',
       day:'numeric'
   }
   const day = date.toLocaleDateString("en-US",options);
   response.render("list", {day,items} );

})

app.post("/",(req,res) => {
    const item = req.body.item;
    items.push(item);
    res.redirect("/");

})
