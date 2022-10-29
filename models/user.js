import mongoose from "mongoose";
import crypto from 'crypto'
const UserSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    password:String
})

UserSchema.pre('save',(next)=>{
   
    const hashedPassword=crypto.pbkdf2Sync('Asan123',"aue",100000,64,"sha512").toString("hex")

    this.password=hashedPassword
    next()
})

const UserModel =mongoose.model("users",UserSchema)

export default UserModel;