//takes 2 inputs, both consisting of an odd and even number each 
function multiplyOddAndEvenNumbers(oddNumber, evenNumber) {
    //stating the condition to accept the first input which is the oddNumber...
    if(oddNumber % 2 !== 0){
        //condition to accept the second input which is the evenNumber...
        if(evenNumber % 2 === 0){
            const result = oddNumber * evenNumber;
            return result; 
        }   
        else{
                return 'sorry, your second input should be an even number';
        }
    }
    else{
        return 'sorry, your first input should be an odd number';
    }
}

console.log(multiplyOddAndEvenNumbers(3,8));    //test for the true conditions in each cases.
console.log(multiplyOddAndEvenNumbers(2, 6));   //test for if, both numbers given are even.
console.log(multiplyOddAndEvenNumbers(3,9));    //test for if, both numbers given are odd.


function factorial(number) {
    //states condition for number=0, because 0! = 1. this also serve as our base condition...
    if(number = 0){
        return 1;
    }
    else{
        const result = factorial(number - 1)
        return number * result
    }
}
console.log(factorial(4));
console.log(factorial(8));
console.log(factorial(0));

function grades(score) {
    if(score >= 70){
        return 'A'
    }
    else if(score >= 60){
        return 'B';
    }
    else if(score >= 50) {
        return 'C';
    }
    else if(score >= 45) {
        return 'D';
    }
    else if(score >= 35) {
        return 'E';
    }
    else{
        return 'F'
    }
}

console.log(grades(85));
console.log(grades(69));
console.log(grades(54));
console.log(grades(47));
console.log(grades(36));
console.log(grades(13));