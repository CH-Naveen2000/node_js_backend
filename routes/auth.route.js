/**
 * POST localhost:8888/ecomm/api/v1/auth/signup
 * 
 * I need to intercept this
 */
const authContoller=require("../controllers/auth.controller")
const authMW= require("../middlewares/auth_mw")
module.exports=(app)=>{
    app.post("/ecomm/api/v1/auth/signup",[authMW.verifySignupBody],authContoller.signup)
    
    //Route for 
//POST localhost:8080/ecomm/api/v1/auth/signin

    app.post("/ecomm/api/v1/auth/signin",[authMW.verifySignInBody],authContoller.signin)


}
