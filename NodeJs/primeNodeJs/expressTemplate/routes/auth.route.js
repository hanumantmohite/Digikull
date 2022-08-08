const express=require("express");
const router=express.Router();
const {Logincontroller,Signupcontroller}=require("../controllers/auth.controller");


router.get("/",Logincontroller);

router.get("/signup",Signupcontroller);
module.exports=router;