const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require("path");
const lodash = require("lodash");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.listen(3000,() => {
    console.log("Running Server At Port 3000");
})

const aboutpagecontent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed id semper risus in hendrerit. Cursus vitae congue mauris rhoncus aenean. Quis auctor elit sed vulputate mi sit amet. Ut placerat orci nulla pellentesque dignissim enim sit amet. Lectus quam id leo in vitae turpis massa. Tellus molestie nunc non blandit massa. Dictumst quisque sagittis purus sit amet. Potenti nullam ac tortor vitae purus faucibus ornare. Ornare arcu odio ut sem nulla. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Consequat semper viverra nam libero justo laoreet sit. Magna fringilla urna porttitor rhoncus dolor purus non enim."
const contactpagecontent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed id semper risus in hendrerit. Cursus vitae congue mauris rhoncus aenean. Quis auctor elit sed vulputate mi sit amet. Ut placerat orci nulla pellentesque dignissim enim sit amet. Lectus quam id leo in vitae turpis massa. Tellus molestie nunc non blandit massa. Dictumst quisque sagittis purus sit amet. Potenti nullam ac tortor vitae purus faucibus ornare. Ornare arcu odio ut sem nulla. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Consequat semper viverra nam libero justo laoreet sit. Magna fringilla urna porttitor rhoncus dolor purus non enim."
const posts = [];
app.get("/",(req,res) => {
    res.render("home",{posts});
    
})

app.get("/about",(req,res) => {
    res.render("about",{aboutpagecontent});
})

app.get("/contact",(req,res) => {
    res.render("contact",{contactpagecontent});
})

app.get("/compose",(req,res) => {
    res.render("compose");
})

app.post("/",(req,res) => {
  
    
    var post = {
        title: req.body.title,
        post:req.body.post
    }

    posts.push(post);
    res.redirect("/");
})

app.get("/posts/:postname",(req,res) => {
    const requestedpost = lodash.lowerCase(req.params.postname);

    posts.forEach(el => {

        const title = lodash.lowerCase(el.title);
        if(title === requestedpost) {
            res.render("post",{el});
        }
        else {
            console.log("Not Found");
        }
    })
})