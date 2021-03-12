# STATEMENTS, EXPRESSIONS AND FUNCTIONS.
## EXPRESSION
An expression is a combination of code values and functions that will eventually give us a result. The main purpose of an is to atually create a value. for example;
> ***const x = y + z;***
*This is an expresion because, whenever x is being called in this program, it returns the single value of the addition of 'y and z'.*
An expression can be written as long as anything, but would still give us a certain single value as specified. for example;     *Console.log(2 * 9); //this will return 18.*

## STATEMENT.
A **Statement** in out line of code performs an action. for example, the conditional statement wich sets a condition for a given line of code to run e.g ***Loops(for, while, e.t.c), if...else are all exples of statements.*** 

## DIFFERENCE BETWEEN STATEMENTS AND EXPRESSIONS.
+ If we can print it out or assign it to a variable then, it's an expression. but if we cannot, it's a statement.
+ Expressions return value, statement do not.
+ All Expressions are statements, but a Statement cannot be used in place of an Expression.

## FUNCTIONS.

A **Function** is a block of codes assigned to a particular name in which when called will perform the specified actions. It is assigned a name for the purpose of re-usability. It can be executed as many times as intended in a program.     
A *function* includes; **Parameters** and **Arguments.**
> **Parameters** are the values listed in the funtion's definition, they pass values into functions. 
> **Arguments** are the vales that are passed to the function.
>*example of a function*
 >   function functionName(a,b){
  >  const add = a + b;
   > return add;
>}
 >   ***functionName(3,4);***

*using the example shown above,*
+ **function** - is the declaration of the Statement.
+ **functionName** - is the name given to the function.
+ **(a,b)** - these are the Parameters given to the function.
+ **(3,4)** - these are the Arguments.
> **Arguments** are called alongside while calling the function.

A *function* can be called in two ways, it could either be as a **Declaration** or an **Expression**;
+ ***Function Declaration***: this is the most common way where the function is given a name as it is being called.
function functionName(param1, param2, ...paramN){
    //function body
};

+ ***Function Expression:*** the function is created without any name and then asigned to a variable.
>const constName = function(param1, param2,...paramN){
 >   //function body
>}
>this will be called thus; constName(Arg1, Arg2,...ArgN)