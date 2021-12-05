const express = require('express');
const app = express();
// app.use((req,res) => {
//     res.send("<h1>This is the response</h1>")
// })


app.get("/r/:reddit/:id",(req,res) => {
    const {reddit,id} = req.params;
    res.send(`<h1>This is the ${reddit} page and you searched for ${id}</h1>`);
})
app.get("/search",(req,res) => {
    const {q,color} = req.query;
    res.send(`<h1>You are Searching for ${q} and the color is ${color} </h1>`)
})
app.get("/cats",(req,res) => {
    // console.log("Cat Requested..");
    res.send("Meow");
})

app.post("/cats",(req,res) => {
    res.send("This is the Post version of the cat request");
})
app.get("/",(req,res) => {
    res.send("Welcome to Home Page");
})
app.get("*",(req,res)=> {
    res.send("Sorry Path Not Found");
})
app.listen(3000,() => {
    console.log("Server Started At Port 3000!!");
})