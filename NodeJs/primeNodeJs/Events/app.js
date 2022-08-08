const EventEmitter = require('events');



const myEmitter=new EventEmitter();



myEmitter.on("wakeup",function(data){
    console.log("wakeup event happended and it sent this data--",data);
})



const arr=[1,2,3,4,5,6,7,8];


for(let i=0;i<arr.length;i++){

    if(arr[i]%2==0){
        myEmitter.emit("wakeup","Its even")
    }
    else{
        myEmitter.emit("wakeup","Its odd")

    }


}