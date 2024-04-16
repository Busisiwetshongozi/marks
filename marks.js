prompt = require("prompt-sync")();

const mark1 = parseFloat(prompt("enter first mark   "));
const mark2 = parseFloat(prompt("enter second mark  "));
const mark3 = parseFloat(prompt("enter third mark   "));
 

let sum = mark1 + mark2 + mark3;
 
let average = sum/ 3
 let status;


if (average<50 ){
status = "you have failed"
}

else if (average>50 && average<75){
    status = "you passed with average"
}
else if(average >50 && average> 75) {
     status = "you passed with a distinction"
    
}
console.log(status)










    


        
       








        
       