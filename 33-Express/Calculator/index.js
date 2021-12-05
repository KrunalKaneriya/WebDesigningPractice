const express = require("express");
const parser = require("body-parser");

const app = express();
app.use(parser.urlencoded({extended:true}));

app.listen(3000,() => {
    console.log("Listening on Port 3000");
})

app.post("/",(req,res) => {
    
    const number1 = parseInt(req.body.num1);
    const number2 = parseInt(req.body.num2);
    const answer = number1+number2;
    res.send(`The Answer is ${answer}`);
})
app.get("/",(req,res) => {
    res.sendFile(__dirname+"\\index.html");
})