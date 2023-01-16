const express=require("express")
const {UserModel}=require("../models/userModel")
const bcrypt=require("bcrypt")
const jwt= require("jsonwebtoken")

const userRoute=express.Router()

userRoute.post("/register",async(req,res)=>{
    const {name,email,gender,password}=req.body
    try{
bcrypt.hash(password,2,async(err,pass)=>{
    if(err){
        console.log(err)
    }else{
        const new_user= new UserModel({
           name, email,password:pass,gender
        })
        await new_user.save()
        res.send("user registered")
    }
})
    }catch(err){
console.log(err)
res.send({"msg":"err in registring"})
    }
})
userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
     const new_user = new UserModel({
       email
     });
     if(new_user.length>0){
bcrypt.compare(password,new_user[0].password,(err,result)=>{
    if(result){
        const token =jwt.sign({userId:new_user[0]._id},"media") 
        res.send({msg:"login succesfull",token:token})
    }else{
        res.send("wrong credientials")
    }
})

     }else{
        res.send("wrong credientials");

     }
   
  } catch (err) {
    console.log(err);
    res.send({ msg: "err in registring" });
  }
});

module.exports={
    userRoute
}