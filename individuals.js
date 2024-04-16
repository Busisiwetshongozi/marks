prompt = require("prompt-sync")()

for( let i=0;i <3;i++){
const learner1 = prompt("Enter learner name  ")
let mark1 = parseFloat(prompt("Enter first mark  "))
let mark2 = parseFloat(prompt("Enter second mark  "))
let mark3 = parseFloat(prompt("Enter third mark   "))

let sum = mark1 + mark2 + mark3
let average= sum/3

let status;

if(average<50){
status= "you have failed"
}
else if (average>50)
status= "you  passed with average"

else if (average>50 && average> 75)
status = "you passed with a distinction"

console.log(status)}


    




























