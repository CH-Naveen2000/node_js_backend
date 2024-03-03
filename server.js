/**
 * This will be the starting file of the project
 * 
 */

const express= require("express")
const mongoose=require("mongoose")
const app= express()
const server_config=require("./configs/server.config")
const db_config=require("./configs/db.config")
const user_model = require("./models/user.model")
const bcrypt= require("bcryptjs")
app.use(express.json()) // It is an middle ware ..This tells when ever u get Json u have to read as js Object   
/**
 * Create an admin user at the starting of the application
 * if not already present
 */

//connection with mongodb
mongoose.connect(db_config.DB_URL)
 const db=mongoose.connection

 db.on("error",()=>{
    console.log("Error while connecting to the mongodb")

 })
 db.once("open",()=>{
    console.log("Connected to the MongoDB")
    init()
 })

 async function init(){
    try{
        let user= await user_model.findOne({userId: "admin"})
    if (user){
        console.log("Admin is already Present.")
        return
    }
    }catch(err){
        console.log("Error while reading the data", TypeError)
    }
    try{
        user= await user_model.create({
            name: "Naveen",
            userId: "admin",
            email: "nav@123gmail.com",
            userType: "ADMIN",
            password: bcrypt.hashSync("Welcom123",8)
        })
        console.log("Admin created",user)


    }
    catch(err){
        console.log("Error while creating admin",err)
    }

 }
//Stich the route to the server

require("./routes/auth.route")(app)//call routes and passing app object
require("./routes/category.route")(app)
/**
 * Start the server
 * 
 */


app.listen(server_config.PORT,()=>{
    console.log(`Server Started at port number: ${server_config.PORT}`)
})