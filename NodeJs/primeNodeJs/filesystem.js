const fs =require('fs');
const os =require('os');
const fsPromises =require('fs/promises');


// This modules hel[p us to intract with files
//write operation - callback version, sync version, promise version
//Append Operation
//read operation
//delete operation

//


/*fs.writeFile('Demo.txt',"hello there",function(err,data){
console.log("Successful")

})

fs.appendFile('Demo.txt',`hello there ${os.EOL}`,function(err,data){
    console.log("Successful")
    
    })

    fs.readFile('Demo.txt',"UTF-8",function(err,data){
        console.log(data)
    })

    //Deleted operation

    fs.unlink('./cliApp/test/demo.txt',function(err,data){

        if(err){

            console.log(err)
            return;
        }
        console.log("Deleted")
    })
    //Sync methods;
//fs.writeFileSync(); 
//fs.appendFileSync();
//fs.unlinkSync();

// You have to generate json data ,you have to write it to the file
// you have to read the content 
// write in another file 
// delete the original file 

// How to convert a callback into a promise 

function readFilePromise(fileName){
    const promise=new Promise((res,rej)=>{
        fs.readFile(fileName,'utf-8',function(err,data){
           if(err){
            rej(err);
           }
           res(data);
        
        })
    })
return promise;
}
readFilePromise("./cliApp/test/demo.txt").then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})

//Using promise version

fsPromises.readFile("./cliApp/test/demo.txt",'utf-8').then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})

*/

//Fs readir 
/*
fsPromises.readdir("/Users/shubhpro/julybatch").then(data=>{
   data.forEach(ele=>{
  //  console.log(ele);
   console.log( fs.lstatSync(`/Users/shubhpro/julybatch/${ele}`).isDirectory() );
   // if its a file then you have to append  in the file otherwise do nothing
    /*
    fs.lstat(ele,function(err,data){
       // console.log(data);
      //  console.log(data.isDirectory());
    })
   
     
   })
}).catch(err=>{
    console.log(err);
})
*/
/*
fs.readFile("rockyou.txt","utf-8",function(err,data){
    console.log(data);
})
*/

//Readstream

// read stream  //write stream // duplex stream (for both reading and writing)
/*
fs.createReadStream("rockyou.txt").pipe(
    process.stdout
    
)
*/
var readStream = fs.createReadStream("./Demo.txt");
var writeStream = fs.createWriteStream("./demo2.txt");
readStream.pipe(writeStream);