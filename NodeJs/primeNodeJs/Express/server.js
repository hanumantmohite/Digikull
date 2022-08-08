const express=require("express");
const cors=require("cors");
const {loggingMiddleware,loggingMiddleware2,appLevelMiddleware}=require("./middlewares/middleware");
const fs=require("fs");
const app=express();  //getting an app object by calling the express function 
const authroutes=require("./routes/auth.routes");
const htmlroutes=require("./routes/html.routes");
const port=9090;
//const data=fs.readFileSync("./large.txt");


app.use(express.json());
app.use(cors());
//app level middleware
app.use(appLevelMiddleware);  //this middleware would be activate for every route in your application

app.use("/auth",authroutes);

app.use("/html",htmlroutes);

app.use(express.static("static"));

//send html file 
//send static images --tomorrows
//mioddlewares

//context api  --jan we

app.get("/",function(req,res,next){


    /**
     * response methods  //res.write and res.end() of http already in them 
     * res.send()  // you can send text or json data
     * res.sendFile() // for sending any kind of file including html files too
     * res.json({}) //explicitly for json data
     * res.render();// for rendering the template engines
     * res.redirect() ; // for redirecting to anothe routes
     */

   // fs.createReadStream("./large.txt").pipe(res);
/*
    fs.readFile("./large.txt",'utf-8',function(err,data){
        if(!err){
            res.send(data);
        }
        else{
            console.log(err);
        }
    })
    */

    res.send("hello world");

  // res.write("hello there");
   //res.end();

})


//post routes  --

app.post("/data",function(req,res){

    console.log(req.body);
    res.send("This is a post route");
})


//Url  Query dat and route params data

app.get("/url",function(req,res){
    //For getting query parameter 
    console.log(req.query);

   // console.log(req.body);
    res.send("This is a get route for dfata");
})
//Route params

app.get("/url/:data/:id/:name",function(req,res){
    //For getting query parameter 
    console.log(req.params.data);

   // console.log(req.body);
    res.send("This is a get route for dfata");
})

//not required params 
// non mandatory req params 

app.get("/params/:id?",function(req,res){
    //For getting query parameter 
    console.log(req.params);

   // console.log(req.body);
    res.send("This is a get route for dfata  idfidididi");
})



// using middleware ----->
// route level middleware

app.get("/middleware",loggingMiddleware,loggingMiddleware2,function(req,res){

    //controller is a method from which you send response to the client 

    res.send("hello people from controller");

})

app.post("/middleware",loggingMiddleware,loggingMiddleware2,function(req,res){
    console.log(req.body.name);// all upper case

    //controller is a method from which you send response to the client 

    res.send("hello people from controller");

})







//Starting the express server at given port
app.listen(port,function(){
    console.log(`Server Started at ${port}`)
})