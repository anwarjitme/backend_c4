const jwt =require("jsonwebtoken")
const authValid=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decode=jwt.verify(token,"media")
        if(decode){
            const userId=decode.userId
            req.body.userId=userId
            next()
        }else{
            res.send("login first")
        }
    }else{
            res.send("login first");

    }
}


module.exports={
    authValid
}