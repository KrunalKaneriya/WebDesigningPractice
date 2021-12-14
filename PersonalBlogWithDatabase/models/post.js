const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    post:{
        type:String,
    }
})

const Post = mongoose.model("Post",PostSchema);

module.exports = Post;