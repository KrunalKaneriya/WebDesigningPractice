//jshint esversion:6
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product");
const methodOverride = require("method-override");

mongoose.connect("mongodb://localhost:27017/farmStand",{ useNewUrlParser:true,useUnifiedTopology:true} )
    .then(() => {
        console.log("Connection Open..");
    })
    .catch((err) => {
        console.log("Error Establishing Connection");
        console.log(err);
    })

app.set("views",__dirname+"/views");
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

const categories = ['fruit','vegetable','dairy'];


app.listen(3000,() => {
    console.log("Listening At Port 3000");
})

//*Route To Get All Products Displayed in index.ejs file
app.get("/products",async (req,res) => {
    let {category} = req.query;
    if(category) {

    }
    else {
        category='all';
    }

    if(category!='all') {
        const products = await Product.find({category});
        res.render("Products/index",{products,category})
    }
    else {
        const products = await Product.find({});
            res.render("Products/index",{products,category:"All"});
       
    }
   
})

//*Route to find parameterized Product and pass it to products.ejs file
app.get("/products/:id",async (req,res) => {
    const {id} = req.params;
    const foundedProduct = await Product.findById(id);
    res.render("Products/products",{product:foundedProduct});
})

//*Route to create a new product and pass it to newProduct.ejs file
app.get("/newProduct",(req,res) => {
    res.render("Products/newProduct",{ categories });
})
//*Route to post newly created product in database and redirect the product to Parameterized Route
app.post("/products",async (req,res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
})

//*Route to Find the product by parameterized id and pass it to edit.ejs file
app.get("/products/:id/edit",async (req,res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render("Products/edit",{product,categories});
})


app.put("/products/:id",async (req,res) => {
    const {id} = req.params;
    const foundedProduct = req.body;
    console.log(foundedProduct);
    console.log(id);
    await Product.findByIdAndUpdate(id, foundedProduct , {runValidators:true , new:true});
    res.redirect(`/products/${id}`);
})

app.delete("/products/:id",async (req,res) => {
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
})