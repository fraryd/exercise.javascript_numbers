

function compute(expression) {
    
let userInput1 = "";
let userInput2 = "";    
// let Operator = "";
let sum = "";
// let Equals = "";


//Addition
function addition(num1, num2){
    
    for (let i=0; i<num1; i++){
        userInput1 += 1;
    }
    for(let i=0; i<num2; i++){
        userInput2 += 1;
        userInput2 += userInput2;
       
    }
userInput2 += userInput1;
}

addition();
return userInput2;
}