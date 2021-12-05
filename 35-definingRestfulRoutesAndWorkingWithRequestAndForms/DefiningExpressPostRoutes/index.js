const express = require("express");
const app = express();
app.use(express.urlencoded({extended:true}))

app.listen(3000,() => {
    console.log("Started Port 3000");
})

app.get("/tacos",(req,res) => {
    res.send("GET Response");
})



app.post("/tacos",(req,res) => {
    res.send("POST Response");
    const {flavour,quantity} = req.body;
    console.log(`Flavour: ${flavour} Quantity: ${quantity}`);
})
