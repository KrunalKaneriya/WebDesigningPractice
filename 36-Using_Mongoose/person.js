const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopApp",{useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("Error: " + err)
    })

const personSchema = new mongoose.Schema({
    first:String,
    last:String
})

personSchema.virtual('fullname').get(function() {
    return `${this.first} ${this.last}`
})



personSchema.pre("save",async function() {
    this.first = "YO";
    this.last = "MAMA";
    console.log("About to Save");
})

personSchema.post("save",async function() {
    console.log("Now See The Names");
})

const Person = mongoose.model("Person",personSchema);
