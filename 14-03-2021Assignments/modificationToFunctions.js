//a function to use the operator used as string to operate on the firstNumber and secondNumber..

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
