import express from 'express'
import User from '../models/user.js' 
const router=express.Router()


//all users
router.get('/users',async (req,res)=>{
    const users=await User.find()
    res.status(200).send(users)
})

/
router.get('/users/:id',async (req,res)=>{
    const user=await User.findById(req.params.id)
    res.status(200).send(user)
})

//post
router.post('/users',async (req,res)=>{
    const user=new User(req.body)
   await user.save()
   res.status(201).send()
})

//update
router.put('/users/:id',async (req,res)=>{
await User.findByIdAndUpdate(req.params.id,req.body)
res.status(200).send()
})
//delete user
router.delete('/users/:id',async (req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.status(200).send()
})


export default router;