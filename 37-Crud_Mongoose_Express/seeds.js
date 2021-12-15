const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose.connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connection Open..");
  })
  .catch((err) => {
    console.log("Error Establishing Connection");
    console.log(err);
  })

const seedProducts = [{
    name: "Ruby Grapefruit",
    price: 1.99,
    category: 'fruit'
  },
   {
    name: "Fairy Eggplant",
    price: 1.00,
    category: 'vegetable'
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: 'fruit'
  },
  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: 'fruit'
  },
  {
    name: "Organic Celery",
    price: 1.50,
    category: 'vegetable'
  },
  {
    name: "Chocolate Whole Milk",
    price: 2.69,
    category: 'dairy'
  },
  {
    name: "Curd",
    price: 0.52,
    category: 'dairy'
  },
  {
    name: "Strawberry",
    price: 2.56,
    category: 'fruit'
  }
]

Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
