const express=require("express")
const {userRoute}=require("./routes/userRoute")
const {postRoute}=require("./routes/postRoute")
const {connection}=require("./configs/db")
const {authValid}=require("./middlewares/authenticate")
const app=express()
app.use(express.json())
 app.get("/",(req,res)=>{
    res.send("home")
 })
app.use("/users", userRoute);
app.use(authValid)
app.use("/posts",postRoute)


app.listen(8080,async()=>{
    try{
await connection
console.log("connected to db")
    }catch(err){
console.log(err)
    }
    console.log("app running on port 8080");
})