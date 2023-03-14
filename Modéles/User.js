const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    Email:String,
    passWord:String
})
module.exports=mongoose.model("User",UserSchema);