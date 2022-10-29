import mongoose from "mongoose";

const BlogSchema=new mongoose.Schema({
    title:String,
    author:String,
    body:String,
    comments:[{body:String,date:Date}],
    createdDate:{type:Date,default:Date.now},
    meta:{
        votes:Number,
        favs:Number
    }
})

const BlogModel=mongoose.model("blogs",BlogSchema)
export default BlogModel;