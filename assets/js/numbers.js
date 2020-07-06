

function compute(expression) {
    
let userInput1 = "1";
let userInput2 = "1";    
// let Operator = "";
let Equals = "";


//Addition
function addition(answer){
    for (let i=0; i<answer; i++){
        userInput1 += 1;
    }
    for(let i=0; i<answer; i++){
        userInput2 += 1;
        Equals += userInput1 + userInput2;
    }
    return Equals;
}

return Equals;
}