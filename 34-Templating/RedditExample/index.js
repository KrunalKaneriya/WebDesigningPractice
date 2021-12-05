const express = require("express");
const path = require("path")
const app = express();
const redditData = require("./data.json");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public")));

app.listen(3000,()=> {
    console.log("Server Started At Port 3000.")
})
app.get("/",(req,res)=> {
    res.render("home.ejs");
})
app.get("/rand",(req,res) => {
    let number = Math.floor(Math.random() * 10) +1;
    res.render("rand",{number});
})

app.get("/r/:subreddit",(req,res) => {
    const { subreddit } = req.params; //Here we have destructured the paramerter 

    const data = redditData[subreddit]; //If we access this object via . then it will come undefined
    if(data) {
        res.render('subreddit',{...data});
    }
    else {
        res.render("notfound",{subreddit});
    }
    
})

app.get("/cats",(req,res) => {
    const cats = ['Blue','Wyatt','Rocket','Monty','Stephanie','Winston']
    res.render('cats',{cats});
}) 