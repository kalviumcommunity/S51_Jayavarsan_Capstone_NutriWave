const { Int32 } = require("mongodb")
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')
const joi = require('joi')
const passwordcomplexity = require('joi-password-complexity');


const userSchema = new mongoose.Schema({
    Name:{type: String , required : true},  //username of the user
    Emailid:{ type:String,required:true },   //email id of the user
    Password:{type:String,required:true}  ,   //password for the user to login   
    Username:{type: String , required : true},
    Age:{type: Int32 , required : true},
    Height: {type: Int32 , required : true},
    Weight: {type: Int32 , required : true},
})

userSchema.methods.generateAuthtoken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresIn:"30d"})
    return token
}

const User  = mongoose.model("User",userSchema)

const validate = (data)=>{
    const schema = joi.object({
     Name:joi.string().min(5).max(20).label("Name"),
     Emailid:joi.string().email().required().label("Email Id"),
     Password:passwordcomplexity().required().label("Password"),
     Username:joi.string().min(5).max(20).label("Username"),
     Age:joi.number().integer().positive().greater(12),
     Height:joi.number().integer(),
     Weight:joi.number().precision(2)
    });
    return  schema.validate(data);
}

module.exports= {User,validate};