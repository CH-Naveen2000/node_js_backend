const mongoose=require('mongoose')

/**
 * name 
 * userId
 * password
 * email
 * userType
 */


const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        minLength: 15,
        unique: true

    },
    userType:{
        type: String,
        default: "CUSTOMER",
        enum: ["CUSTOMER","ADMIN"]
    }
},{timestamps: true,versionKey:false})

module.exports=mongoose.model("User",userSchema) //It will create a collection called Users
