const fs=require("fs");
const Logincontroller=(req,res)=>{

res.render("login" ,{name:"Shubham"});

}

const Signupcontroller=(req,res)=>{

    fs.readFile("file.json","utf-8",function(err,data){
        if(!err){
            //res.send(`hello there ${data}`);
            res.render("signup",{data:JSON.parse(data)});  // is specific for sending view/template engines
        }
        else{
            res.send(err);
        }
       
    })
    


    
    }


module.exports={
    Logincontroller,
    Signupcontroller

}