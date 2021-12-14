const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Post = require("./models/post");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));


/***************************************Mongoose Section************************************/

mongoose.connect("mongodb://localhost:27017/posts",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => {
        console.log("Connection Open:Mongodb");
    })
    .catch(err => {
        console.log(err);
        console.log("Error Connecting To Database");
    })





/************************************Mongoose Section End***********************************/


//*Listening To The Express Port
app.listen(3000,() => {
    console.log("Running Server At Port 3000");
})



//*Finding the All Posts and passing it to the Home.ejs Page
app.get("/", async (req,res) => {

    const posts = await Post.find({});
    res.render("home",{posts});
    
})

//*Added Route to Go to About.ejs Page
app.get("/about",(req,res) => {
    const aboutpagecontent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    res.render("about",{aboutpagecontent});
})

//*Added Route to Go to Contact.ejs Page
app.get("/contact",(req,res) => {
    const contactpagecontent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    res.render("contact",{contactpagecontent});
})

//*Added Route to Go to compose.ejs Page
app.get("/compose",(req,res) => {
    res.render("compose");
})


//*Adding Post Route to Fetch the data from compose.ejs file and adding the object to database and redirecting to Home Route
app.post("/", async (req,res) => {
    const createdPost = new Post({
        name:req.body.title,
        post:req.body.post
    })
        await createdPost.save(function (err,object) {
            if(err) {
                console.log("Error In Saving Object");
                console.log(err);
            }
            else {
                console.log("Object Saved");
                
            }
    
        })
    res.redirect("/");
})

//*Added Route to Go to Specific Post Via its Id which is fetched from Home Route
app.get("/posts/:postId",async(req,res) => {
    const requestedPostId = req.params.postId;
    const el = await Post.findOne({_id:requestedPostId});
    if(el) {
        res.render("post",{el});
    }
    else {
        console.log("Couldn't Find Matching Post ID");
    }
})

//*Added Delete Route To Delete Specific Post And ID is fetched From Home Page
app.delete("/delete/:postId", async (req,res) => {
    const postId = req.params.postId;
    await Post.findByIdAndDelete(postId);
    res.redirect("/");
})

//*Added Get Route to Edit Specific Post and It is Fetched From Home Page
app.get("/post/:postId/edit",async (req,res) => {
    const postId = req.params.postId;
    const foundProduct = await Post.findById(postId);
    res.render("edit",{foundProduct});
})

//*Added Put Route to Update the Existing Post And Data is Fetched From Edit.ejs Page
app.put("/post/:postId",async (req,res) => {
    const postId = req.params.postId;

    const foundedProduct = req.body;

    await Post.findByIdAndUpdate(postId,foundedProduct,{new:true,runValidators:true});
    res.redirect("/");
})