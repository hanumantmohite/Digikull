const registration={

}

const readline=require("readline"); 


const input=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

input.question("What is your Name \r\n",function(name){
    // Callback hell

    registration.name=name;
    input.question("What is your city Name \r\n",function(cityName){
        registration.cityName=cityName

        input.question("What is your state Name  \r\n",function(stateName){
            registration.stateName=stateName


            input.question("What is your country Name  \r\n",function(countryName){
                registration.countryName=countryName;

                input.question("What is your age  \r\n",function(age){
                    registration.age=age;
    
                    input.question("What is your marks  \r\n",function(marks){
                        registration.marks=marks;
        
                        input.write("your registration succes \n");
                        input.write(`your registration Details Are ${JSON.stringify(registration)} `);
        
                        input.close();
        
                    })
    
                })

            })
        })

        

    })
   
})

// You have to create a student registration app

// Name ,city ,state ,country ,age ,marks -->