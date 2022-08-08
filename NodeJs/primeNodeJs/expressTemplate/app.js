const express=require("express");
const app=express();
const authrouter=require("./routes/auth.route");
app.set('view engine', 'ejs');
//app.set('views','./htmls'); 

app.use("/auth",authrouter);



module.exports=app;