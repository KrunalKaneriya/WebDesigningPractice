const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shopApp",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Error: " + err)
    })

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        min:0
    },

    onsale: {
        type:Boolean,
        default:false
    },

    categories:{
        type:[String],
        default:['Cycling']
    },
    size:{
        type:String,
        enum:['S','M','X'],
        default:'S'
    }
})

productSchema.methods.greet = function () {
    console.log("Hello. Howdy!!");
    console.log(`Welcome --${this.name}`);
}

productSchema.methods.toggleSale = function() {
    this.onsale = !this.onsale;
    return this.save();
    
}

productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function() {
    return this.updateMany({},{onsale:true,price:0})
}

const Product = mongoose.model("Product",productSchema);

const findProduct =async () => {
    const result = await Product.findOne({name:"Mountain Bike"});
    result.greet();
    await result.toggleSale();
    await result.addCategory("Outdoors");
    console.log(result);
} 



findProduct();

const bike = new Product({name:"Mountain Bike",price:25.25,categories:["Cycling","Off Riding"],size:"M" }).save()
    .then(data => {
        console.log("Data Inserted");
        console.log(data)
    })
    .catch(err => {
        console.log("Error");
        console.log(err);
    })

Product.fireSale().then(res => console.log(res))