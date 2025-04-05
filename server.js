//importing all required external modules after instalation
const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require('./models/User')
const bcrypt=require('bcryptjs')

//Middleware
const PORT=3000
const app=express()
app.use(express.json())

//connecting Mongodb Atlas

mongoose.connect(process.env.MonGo_URL).then(
    ()=>console.log("DB connected successfully...")
).catch(
    (err)=>console.log(err)
)

//API landing page http://localhost:3000/
app.get('/landing',async(req, res)=>{
     try{
        res.send("<h1 align=center>welcome to the backend and week 2</h1>")
     }
     catch(err)
        {
        console.log(err)
     }
    })
    
//API registration page http://localhost:3000/register
app.post('/register',async(req, res)=>{
    const {user,email,password}=req.body
    try{
       const hashpassword=await bcrypt.hash(password,10)
       const  newUser=new User({user,email,hashpassword})
       await newUser.save()
       console.log("New User is registered successfully...")
       res.json({message:'User created....'})
    }
    catch(err)
    {console.log(err)

    }
})

//Server running and testing
app.listen( PORT,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("Server is running on port |This Deepthi : "+PORT)
})