
//func expects 3 parameters with the first two being numbers and the last being either a multiply, sum or divide with different conditions in each conditions.

function calculate(firstNumber, secondNumber, string){
    if(string === "multiply"){
        return firstNumber * secondNumber;
    }
     if(string === "divide"){
        return firstNumber / secondNumber;
    }
     if(string === "sum"){
        return firstNumber + secondNumber;
    } 
}
console.log(calculate(4,5, 'multiply'));
console.log(calculate(4,5, "divide"));
console.log(calculate(4,5, "sum"));

//using the switch statements...
const calculator = (numberOne, numberTwo, myString) => {
    switch(true){
        case myString === "multiply":
            return numberOne * numberTwo
            break;
        case myString === "divide":
            return numberOne / numberTwo
            break;
        case myString === "sum":
            return numberOne + numberTwo
            break;
        default: console.log("please, enter a valid option.")
    }
   
}
console.log(calculator(2,3,"divide"));
console.log(calculator(2,3, "sum"));
console.log(calculator(2,3, "multiply"));