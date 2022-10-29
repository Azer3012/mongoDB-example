import mongoose from "mongoose"
import express from 'express'
import Blog from "./models/blog.js"


const app=express()

const url=`mongodb+srv://Azer:azer&A7777@cluster0.biavprm.mongodb.net/blog-app?retryWrites=true&w=majority`

mongoose.connect(url)

app.use(express.json())

//all blogs
app.get('/api/v1/blogs',async (req,res)=>{
    const blogs=await Blog.find()
    res.status(200).send(blogs)
})

//selected blog
app.get('/api/v1/blogs/:id',async (req,res)=>{
    const blog=await Blog.findById(req.params.id)
    res.status(200).send(blog)
})

//post
app.post('/api/v1/blogs',async (req,res)=>{
    const blog=new Blog(req.body)
   await blog.save()
   res.status(201).send()
})

//update blog
app.put('/api/v1/blogs/:id',async (req,res)=>{
await Blog.findByIdAndUpdate(req.params.id,req.body)
res.status(200).send()
})
//delete blog
app.delete('/api/v1/blogs/:id',async (req,res)=>{
    await Blog.findByIdAndDelete(req.params.id)
    res.status(200).send()
})


app.listen('3000',()=>{
    console.log('express server listening..')
})






