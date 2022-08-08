const http=require("http");//importing http module
const fs=require("fs");

 
 const server2 = http.createServer(function(req,res){
res.write("Hello")
res.end()

 })
 
server2.listen(5050,function(){
    console.log('my server is running')
})
/*
const server=http.createServer(function(req,res){

    console.log(req.url);

    if(req.url=="/"){
        res.write("Root url"); // used to send the data
        res.end();// used to finish the response stream

    }

    else if(req.url=="/data"){
        const data=[{name:"john"},{name:"Joe"}]

        res.write(JSON.stringify(data));
        res.end();

    }
    /**
     * 
     * 
     *  if(req.url=="/"){
        res.write(`  write html code `); // used to send the data
        res.end();// used to finish the response stream

    }
     
    else if(req.url=="/html"){

        // html file -->
        // fs.readFile 
        // read the contents of the file using fs module and then you have to  render it

        fs.readFile("index.html",'utf-8',function(err,data){
            if (!err){
                res.write(data);
            }

            res.end();

        })

    

   

        
    }
 



});


server.listen(809,function(){
    console.log("http Server is running ")
})
*/