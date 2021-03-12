
//func expects 3 parameters with the first two being numbers and the last being either a multiply, sum or divide with different conditions in each conditions.

function calculate(numberOne, numberTwo, string){
    if(string === "multiply"){
        return numberOne * numberTwo;
    }
    else if(string === "divide"){
        return numberOne / numberTwo;
    }
    else if(string === "sum"){
        return numberOne + numberTwo;
    } else{console.log("please, enter a valid option.")}
}
console.log(calculate(4,5, 'multiply'));
console.log(calculate(4,5, "divide"));
console.log(calculate(4,5, "sum"));

//using the switch statements...
const calculator = (numOne, numTwo, myString) => {
    switch(true){
        case myString === "multiply":
            return numOne * numTwo
            break;
        case myString === "divide":
            return numOne / numTwo
            break;
        case myString === "sum":
            return numOne + numTwo
            break;
        default: console.log("please, enter a valid option.")
    }
   
}
console.log(calculator(2,3,"divide"));
console.log(calculator(2,3, "sum"));
console.log(calculator(2,3, "multiply"));