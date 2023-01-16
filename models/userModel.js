// name ==> String
// email ==> String
// gender ==> String
// password ==> String
const mongoose=require("mongoose")
const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    password:String
})
const UserModel=mongoose.model("user_model",UserSchema)

module.exports={
    UserModel
}