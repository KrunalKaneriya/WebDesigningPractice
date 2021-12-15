const express = require("express");
const app = express();
const path = require("path");
// const dateFunction = require("./date");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const { list } = require("postcss");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.listen(3000, () => {
    console.log("Server Started At Port 3000");
})


mongoose.connect("mongodb://localhost:27017/todolist", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to Database todolist...")
    })
    .catch(err => {
        console.log("Error Connecting to DB..");
        console.log(err);
    })






//Creating New Schema of TodoList
const ItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})

const ListSchema = new mongoose.Schema({
    name:String,
    items:[ItemSchema]
})

//Creating Model with Name Item and Saving as TodoList
const Item = mongoose.model("Item", ItemSchema);
const List = mongoose.model("List",ListSchema);


const item = new Item({
    item:"Cooking Food"
})

const item2 = new Item ({
    item:"Buying Papers"
})

const item3 = new Item({
    item:"Watching TV Series"
})

const item4 = new Item({
    item:"Completing Assignment"
})

const defaultItems = [item,item2,item3,item4];

// Item.insertMany([item,item2,item3,item4]).then((res) => {
//     console.log(res);
//     console.log("Data Inserted");
// })
// .catch(err => {
//     console.log("Error Inserting Data");
//     console.log(err);
// })






app.get("/", async (request, response) => {
    //    const date = new Date();
    //    const options = {
    //        weekday:'long',
    //        year:'numeric',
    //        month:'long',
    //        day:'numeric'
    //    }
    //    const day = date.toLocaleDateString("en-US",options);

    // const day = dateFunction.returnDate();
    const items = await Item.find({});
    response.render("list", { day: "Today", items });

})

app.post("/", async (req, res) => {
    const itemName = req.body.item;
    const listName = req.body.listName;

    const item = new Item({item:itemName});
    
    if(listName === "Today") {
        await item.save();
        res.redirect("/");
    }
    else {
        List.findOne({name:listName} , function (err , foundlist) {
            foundlist.items.push(itemname);
            foundlist.save();
            res.redirect("/" + listName);
        });
      
        
    }
    
    

})

app.delete("/", async (req, res) => {
    const delete_id = req.body.item_id;
    await Item.findByIdAndDelete(delete_id);
    res.redirect("/");
})

app.get("/:customListName" ,async (req,res) => {
    const {customListName} = req.params;
    
    // const list = new List({
    //     name:customListName,
    //     items:defaultItems
    // });

    const foundList = await List.findOne({name:customListName});

    if(!foundList) {
        const list = new List({
            name:customListName,
            items:[]
        });
        list.save();
        res.redirect("/"+customListName);
        // res.render("list",{listTitle : list.name , items: list.items});
    }
    else {
       res.render("list",{ listTitle:foundList.name, items:foundList.items })
    }

   
})