import { MongoClient, ObjectId } from "mongodb";

const url=`mongodb+srv://Azer:azer&A7777@cluster0.biavprm.mongodb.net/?retryWrites=true&w=majority`

const client=new MongoClient(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

client.connect(async(err)=>{
    if(err){
        console.log(err);
        return
    }

    const db=client.db('test')
    const users=db.collection('users')

    // users.insertOne({
    //     firstName:'Azer',
    //     lastName:"Abishov",
    //     age:25,
    //     username:"azer",
    //     email:'abishovazar@gmail.com',
    //     address:{
    //         country:"Azerbaijan",
    //         city:'Baku'
    //     }
    // })

    //find methosdu ile db-dan oxumaq ucundu
    //find icindeki object isaresi icinde ise biz sertler vere bilerik meslen yasi 25 olanlari getir deye bielrik

    

    // const userList=await users.find({age:{$gte:27}}).toArray()

    await users.updateOne({_id:ObjectId('635d09e5a06c10468b38a9f1')},{
        $set:{
            age:30
        }
    })

    const userList=await users.find({}).toArray()

    console.log(userList);
    console.log("Connected DB...");
    
})