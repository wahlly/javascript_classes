# LOOPS.   

## Infinite Loops:  
An infinite loop is a sequence of instructions in a computer program which loops endlessly, either due to the loop having no terminating condition, having one that can never be met, or one that causes the loop to start over.     
> It also a piece of code that lacks a functional exit so that it repeats indefinitely.
***example of an infinite loop;
while (true) {<br>

    // execute code forever <br>

}<br>


## For Loops:
For loops are commonly used to count a certain number of iterations to repeat a statement. Use a break statement to exit the loop before the condition expression evaluates to false. This consists of three(3) expressions and a statement. The 3 expressions are;
1. Initialization - this is where you declare your and initialize your variable.
2. Condition    -   here, you set a condition you want for the loop to keep running. until this condition is met, that is when the loop runs.
3. Final-expression -   this is where we state what happens after the loop condition has been met.

written above are the three(3) expressions in a for loop while the statement is the written code to be executed in the code block.

> ***example of a for loop:***<br>
> for (var i = 0; i < 9; i++) {<br>
   console.log(i);<br>
}<br>
> the code block above will loop through and list numbers from 1 - 9.


## For Each Loop:
The forEach method is also used to loop through arrays, but it uses a function differently than the normal "for loop".

The forEach method passes a callback function for each element of an array.   

> *for example;* 
> let fruits = ['orange', 'mango','banana', 'cashew', 'pinneapple']
 >    fruits.forEach(fruit => {
   >      console.log(fruit);
     > });


## For of loops:
The for...of statement creates a loop that iterates over iterable objects. For...of loop was introduced in ES6 to be an alternative to both for..in and forEach() and supports the new iteration protocol. For..of lets you loop over data structures that are iterable such as Arrays, strings e.t.c.
> example of this is; 
> const fruits = ['mango', 'Orange', 'pinneapple'];<br>

>   for (const value of iterable) {<br>
  >         console.log(value);<br>
>   }

>   *the code block written above prints a list of all the fruit in the array.*


