const EventEmitter = require('events');
const os=require("os");
const fs=require("fs");
const myEmitter=new EventEmitter();


myEmitter.on("vowels",function(data){
    fs.writeFileSync(`${data}.txt`,data);

})


function customstartsWith(word){

    const arr=["a","e","i","o","u"];

    for(let i=0;i<arr.length;i++){
        if(word.startsWith(arr[i])){
            return true;
        }



    }

return false;



}


fs.readFile("ab.txt","utf-8",function(err,data){

 const arrofWords=data.split(os.EOL);

for(let i=0;i<arrofWords.length;i++){

    if(customstartsWith(arrofWords[i])){

        myEmitter.emit("vowels",arrofWords[i])

     
    }

}
    



})