# DIFFERENCE BETWEEN FUNCTION PARAMETERS AND ARGUMENTS
## PARAMETERS
*Parameters* are variables defined in the function *(inside of parentheses in the function header)* and used to hold the data passed into the function.

## ARGUMENTS
*Arguments* are the values passed from a function call *(i.e., they are the values appearing inside the parentheses of the call)* and are sent into the function).     
Arguments in the function call are matched to parameters in the function definition based on their position within the lists; that is, each argument must correspond to exactly one parameter based on position. The position of both arguments and parameters is determined by the commas that separate each element in either list. The number of Arguments to be passed into the function call usually depends on the number of paramers defined.

 >function functionName(a,b){<br>
  >  const add = a + b;<br>
   > return add;<br>
>}<br>
 >   ***functionName(3,4);***

*using the example shown above,*
+ **function** - is the declaration of the Statement.
+ **functionName** - is the name given to the function.
+ **(a,b)** - these are the **Parameters* passed into the function.
+ **(3,4)** - these are the **Arguments** which is being called alongside the function name.
> **Arguments** are called alongside while calling the function.

## CONCATENATION                                                                        
we can assign strings to variables and then use concatenation to combine the variables into another string. The plus '+' sign is mostly used for concatenation.
There are 3 different ways of concatenation in javascript which are; the '+' operator, String#Concat(), Array#join().

1. ### The '+' Operator 
**const** str = 'Hello' + ' ' + 'World'
    *console.log(str)*  //prints out ***Hello World***

2. ### The String#Concat();
The concat() function takes one or more parameters, and returns the modified string.
**const** str1 = 'Hello';
**const** str2 = str1.concat(' ', 'World');
    *console.log(str2)* //prints out ***Hello World***

3. ### The Array#join();
This creates a new string from concatenating all the elements in an array.
['Hello' ' ' 'World'].join(' ') // prints out ***Hello World*** 