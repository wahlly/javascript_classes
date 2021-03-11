
//func expects 3 parameters with the first two being numbers and the last being either a multiply, sum or divide with different conditions in each conditions.

function func(input_1, input_2, input_3){
    if(input_3 === "multiply"){
        return input_1 * input_2;
    }
    else if(input_3 === "divide"){
        return input_1 / input_2;
    }
    else if(input_3 === "sum"){
        return input_1 + input_2;
    } else{console.log("please, enter a valid option.")}
}
console.log(func(4,5, 'multiply'));

//using the switch statements...
const mathOperation = (user_1, user_2, user_3) => {
    switch(true){
        case user_3 === "multiply":
            return user_1 * user_2
            break;
        case user_3 === "divide":
            return user_1 / user_2
            break;
        case user_3 === "sum":
            return user_1 + user_2
            break;
        default: console.log("please, enter a valid option.")
    }
   
}
console.log(mathOperation(2,3,"divide"));