import mongoose from "mongoose"
import express from 'express'


import blogRoutes from './routes/blogs.js'
import userRoutes from './routes/users.js'


const app=express()



const url=`mongodb+srv://Azer:azer&A7777@cluster0.biavprm.mongodb.net/blog-app?retryWrites=true&w=majority`

mongoose.connect(url)

app.use(express.json())

app.use("/api/v1",blogRoutes)
app.use("/api/v1",userRoutes)




app.listen('3000',()=>{
    console.log('express server listening..')
})






