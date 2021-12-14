const express =require("express");
const app = express();
const path = require("path");
const {v4:uuid} = require("uuid");
const methodOverride = require("method-override");

uuid();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.listen(3000,() => {
    console.log("Started Server At Port 3000");
})

let comments = [
    {
        username:"Todd",
        comment:"lol that is so funny!",
        id:uuid()
    },

    {
        username:"Skyler",
        comment:"I loke to go birdwatching with my dog",
        id:uuid()
    },

    {
        username:"Sk8erBoi",
        comment:"Plz Delete your account, Todd",
        id:uuid()
    },

    {
        username:"God",
        comment:"Praise The Almighty God!",
        id:uuid()
    }
]

app.get("/comments",(req,res)=> {
    res.render("comments/index",{comments})
})

app.get("/comments/:id/edit",(req,res)=> {
    const {id} = req.params;
    const comment = comments.find(comment => comment.id == id);
    res.render("comments/edit",{comment})
})

app.get("/comments/new",(req,res) => {
    res.render("comments/new");
})

app.post("/comments",(req,res) => {
    const {username,comment} = req.body;
    comments.push({username,comment,id:uuid()});
    res.redirect("comments");
})

app.get("/comments/:id",(req,res) => {
    const {id} = req.params
    const comment = comments.find(comment => comment.id == id);
    res.render("comments/show",{comment});
})

app.patch("/comments/:id",(req,res) => {
    const {id} = req.params;
    const newComment = req.body.comment;
    const foundcomment = comments.find(comment => comment.id == id);
    foundcomment.comment = newComment;
    res.redirect('/comments');
})

app.delete("/comments/:id",(req,res)=> {
    const {id}= req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments")
})
